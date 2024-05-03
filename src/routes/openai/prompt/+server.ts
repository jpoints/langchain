import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import * as dotenv from "dotenv";
import { json } from '@sveltejs/kit';
dotenv.config();

export const POST = async ({request}) => {
    let res = await request.json();


    //Pick the LLM that yoo are using.
    //provide any options to configure the chat.
    const chatModel = new ChatOpenAI({
        model: "gpt-3.5-turbo",
        //cache: true,
        //maxTokens: 100,
        //maxConcurrency: 5
        //temperature: 1
    });

    const prompt = ChatPromptTemplate.fromMessages([
        ["system", res.context],
        ["user", res.question],
    ]);
    
    const chain = prompt.pipe(chatModel);
    let chat = await chain.invoke({});

    const answer = {
        answer:chat.content,
        tokens:{
            prompt:chat.response_metadata.tokenUsage.promptTokens,
            response:chat.response_metadata.tokenUsage.completionTokens
        }
    }
        
    return json(answer);
}
