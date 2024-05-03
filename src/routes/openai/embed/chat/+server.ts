import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import {ChatPromptTemplate,MessagesPlaceholder} from "@langchain/core/prompts";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { convertHistoryToBase } from "$lib/langchainHelper";
import * as dotenv from "dotenv";
import { json } from '@sveltejs/kit';

dotenv.config();

export const POST = async ({request}) => {
    let res = await request.json();

    console.log(res);

    //initialize open Api object
    const chatModel = new ChatOpenAI({
        maxTokens:100
    });

    const loader = new CheerioWebBaseLoader(res.page);

    const docs = await loader.load();
    const splitter = new RecursiveCharacterTextSplitter();
    const splitDocs = await splitter.splitDocuments(docs);

    const embeddings = new OpenAIEmbeddings();

    const vectorstore = await MemoryVectorStore.fromDocuments(
        splitDocs,
        embeddings
    );

    const prompt = ChatPromptTemplate.fromTemplate(`
        Answer the following question based only on the provided context:<context>{context}</context>
        Question: {input}`
    );

    const documentChain = await createStuffDocumentsChain({
        llm: chatModel,
        prompt:prompt
    });

    const retriever = vectorstore.asRetriever();

    const retrievalChain = await createRetrievalChain({
        combineDocsChain: documentChain,
        retriever:retriever,
    });

    const historyAwarePrompt = ChatPromptTemplate.fromMessages([
        new MessagesPlaceholder("chat_history"),
        [
            "user", "{input}"
        ],
        [
          "user", "Given the above conversation, generate a search query to look up in order to get information relevant to the conversation",
        ],
      ]);

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
       llm: chatModel,
       retriever,
       rephrasePrompt: historyAwarePrompt,
    });

    const historyAwareRetrievalPrompt = ChatPromptTemplate.fromMessages([
        [
          "system",
          "Answer the user's questions based on the below context:\n\n{context}",
        ],
        new MessagesPlaceholder("chat_history"),
        ["user", "{input}"],
    ]);
      
    const historyAwareCombineDocsChain = await createStuffDocumentsChain({
        llm: chatModel,
        prompt: historyAwareRetrievalPrompt,
    });
     
    const conversationalRetrievalChain = await createRetrievalChain({
        retriever: historyAwareRetrieverChain,
        combineDocsChain: historyAwareCombineDocsChain,
    });

    const chat = await conversationalRetrievalChain.invoke({
        chat_history:convertHistoryToBase(res.history),
        input: res.question,
    });

    let answer = {answer:chat.answer}
    
    return json(answer);
}
