import { ChatOpenAI } from "@langchain/openai";
import * as dotenv from "dotenv";
import { json } from '@sveltejs/kit';
dotenv.config();


export const POST = async ({request}) => {
    let res = await request.json();

    //initialize open Api object
    const chatModel = new ChatOpenAI({
        //cache: true,
        //maxTokens: 100,
        //maxConcurrency: 5
        //temperature: 1
    });

    //Example 1 : making a request
    let chat:any = await chatModel.invoke(res.question);

    console.log(chat.response_metadata);    
    
    const answer = {
        answer:chat.content,
        tokens:{
            prompt:chat.response_metadata.tokenUsage.promptTokens,
            response:chat.response_metadata.tokenUsage.completionTokens
        }
    }

    return json(answer);

}