import { HumanMessage, AIMessage } from "@langchain/core/messages";


export const convertHistoryToBase = (messages) => {
    let baseMessages = messages.map((message)=>{
        if(message.agent === 'ai'){
            return new AIMessage(message.message)
        }
        else if(message.agent === 'human'){
            return new HumanMessage(message.message)
        }
    })
    return baseMessages;
} 