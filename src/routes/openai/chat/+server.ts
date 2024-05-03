import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import {ChatPromptTemplate,MessagesPlaceholder} from "@langchain/core/prompts";
import { convertHistoryToBase } from "$lib/langchainHelper";
import * as dotenv from "dotenv";
import { json } from '@sveltejs/kit';
dotenv.config();

export const POST = async ({request}) => {
    let res = await request.json();

    //initialize open Api object
    const chatModel = new ChatOpenAI({
        maxTokens:100
    });

    console.log(res);

    const prompt = ChatPromptTemplate.fromMessages([
        ["system", res.context],
        new MessagesPlaceholder("chat_history"),
        ["user", "{input}"]
    ]);

    const chain = prompt.pipe(chatModel);
    
    let invoke = await chain.invoke({
        "chat_history":convertHistoryToBase(res.history),
        "input":res.question
    });

    const answer = {
        answer:invoke.content,
        tokens:{
            prompt:invoke.response_metadata.tokenUsage.promptTokens,
            response:invoke.response_metadata.tokenUsage.completionTokens
        }
    
    }

    
    return json(answer);
}
