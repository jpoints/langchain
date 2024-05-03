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

    let system = `
        Your response should only be in html code. 
        Do not provide any extra verbage, we only want the code.
        You are only returning content that goes inside the <body> and do not include the <body> tag
        Style the page using inline styling. 
        Do you return the full html for a page, only segments
        The schools colors are burn orange and navy blue
        Assume any image links that are provided come from this location "https://moderncampus.com/_resources/images/leadership/pdevries-circle.webp" and images should be 100 x 100
    `
    

    const prompt = ChatPromptTemplate.fromMessages([
        ["system", system],
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
