import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import {ChatPromptTemplate,MessagesPlaceholder} from "@langchain/core/prompts";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { createRetrieverTool } from "langchain/tools/retriever";
import { createOpenAIFunctionsAgent, AgentExecutor } from "langchain/agents";
import { convertHistoryToBase } from "$lib/langchainHelper";
import * as dotenv from "dotenv";
import { json } from '@sveltejs/kit';
dotenv.config();

export const POST = async ({request}) => {
    let res = await request.json();

    let history = res.chat;

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

    const retrieverTool = await createRetrieverTool(retriever, {
        name: "langsmith_search",
        description:
          "Search for information about LangSmith. For any questions about LangSmith, you must use this tool!",
    });

    const searchTool = new TavilySearchResults();

    const tools = [retrieverTool, searchTool];

    const agentPrompt = await ChatPromptTemplate.fromMessages([
        ["system", "You are a helpful assistant"],
        new MessagesPlaceholder("chat_history"),
        ["human", "{input}"],
        ["placeholder", "{agent_scratchpad}"]]
    )
    
    const agentModel = new ChatOpenAI({
        model: "gpt-3.5-turbo",
        temperature: 0,
    });

    const agent = await createOpenAIFunctionsAgent({
        llm: agentModel,
        tools,
        prompt: agentPrompt,
    });

    const agentExecutor = new AgentExecutor({
        agent,
        tools,
        verbose: false,
    });

    const historyMessage = await ChatPromptTemplate.fromMessages([
        ["system", "You are a helpful assistant"],
        new MessagesPlaceholder("chat_history"),
        ["human", "{input}"],
        ["placeholder", "{agent_scratchpad}"]]
    )

    const chat = await agentExecutor.invoke({
        chat_history:convertHistoryToBase(history),
        input: history[ history.length - 1].message
    });

    console.log(chat);
      
    let answer = {answer:chat.output}
    
    return json(answer);

}
