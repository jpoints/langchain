import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import * as dotenv from "dotenv";
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
dotenv.config();

export const POST = async ({request}) => {
    let res = await request.json();

    //initialize open Api object
    const chatModel = new ChatOpenAI({});

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

    const chat = await retrievalChain.invoke({
        input: res.question
    });

    console.log(chat)

    let answer = {
        answer:chat.answer
    }
    
    return json(answer);
}
