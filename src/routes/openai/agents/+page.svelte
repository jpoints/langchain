<script lang="ts">
	/** @type {number} */
	let number;

    $:chat = [{"agent":"ai","message":"Hello how may I help you?"}];


    async function onSubmit(e) {

        const formData = new FormData(e.target);

        const data = {};
            for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        let history = [ ...chat ];
        chat.push({"agent":"human","message":data.question});
        chat.push({"agent":"ai","message":"Thinking..."});
        chat = chat;

        
        const response = await fetch('/openai/agents', {
            method: 'POST',
            body: JSON.stringify({ chat: chat, page:data.page,context: data.context}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let res = await response.json();

        chat[chat.length - 1].message = res.answer;
        chat = chat;
    }
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center ">
        <h1 class="h1 p-5 my-5">Open AI - Chat with Embeded Document</h1>
        <div class="p-2 bg-secondary-200 text-black">
            <p class="p-2 text-lg">In this example, we are showing how to have a chat with the AI with an embedded model. The previous questions and answers are used as context for the next question</p>
            <p class="p-2 text-lg">This uses an API /openai/embeded/chat (POST) with the json request "chat": [chat array] and  and "page":"full url to the page to embed"</p>
            <p>The format of the chat array item is ["ai OR human", "message"]</p>
        </div>
        <div class="m-10 p-10 bg-secondary-600 w-full text-center space-x-1">
            {#each chat as item}
                <div class="flex p-5 m-2 flex justify-center items-center {item.agent === "ai" ? 'bg-primary-700' : 'bg-secondary-700' }">
                    <div class="flex justify-center items-center mr-2 bg-white w-16 h-16 text-black rounded-full shadow-inner shadow-primary-700">{item.agent}</div> 
                    <div class="flex-1">{item.message}</div>
                </div>
            {/each}
        </div>
        <form class="w-full flex flex-col justify-center items-center" on:submit|preventDefault={onSubmit}>
            <div class="w-full flex my-5">
                <label class="p-5 text-xl w-36" for="question">Question</label>
                <input class="flex-right  flex-1  p-5 bg-secondary-100 text-secondary-700 text-lg" type="text" id="question" name="question" value="" />
            </div>
            <div class="w-full flex my-5">
                <label class="p-5 w-36 text-xl" for="context">Context</label>
                <input class="p-5 flex-1 bg-secondary-100 text-secondary-700 text-lg" type="text" id="context" name="context" value="" />
            </div>
            <div class="w-full flex my-5">
                <label class="p-5 w-36 text-xl" for="page">Page</label>
                <input class="p-5 flex-1 bg-secondary-100 text-secondary-700 text-lg" type="text" id="page" name="page" value="https://support.moderncampus.com/cms/glossary.html" />
            </div>
            <button class="w-72 p-5 m-5 bg-primary-700 align-center text-white text-xl" type="submit">Ask Me</button>
        </form>
</div>

