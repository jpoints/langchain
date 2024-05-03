<script lang="ts">
	/** @type {number} */
	let number;

    $:answer = "Hello how may I help you?";
    $:tokens = {prompt:0,response:0}


    async function onSubmit(e) {
        answer = "Thinking..."

        const formData = new FormData(e.target);

        const data = {};
            for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        
        const response = await fetch('/openai/prompt', {
            method: 'POST',
            body: JSON.stringify({ question: data.question, context: data.context}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let res = await response.json();
        answer = res.answer
        tokens = res.tokens
    }
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
        <h1 class="h1 p-5 my-5">Open AI - Prompting Questions</h1>
        <div class="p-2 bg-secondary-200 text-black">
            <p class="p-2 text-lg">In this example, we are showing a technique to focus the context of the question. The context could be simple or robust. Normally the context is defined behind the scenes. The ability for the user to set the context in this example is for visbility into what is going on.</p>
            <p class="p-2 text-lg">This uses an API /openai/prompt (POST) with the json request "question":"provided question" and "context":"intended context of the chat"</p>
        </div>
        <form class="w-full flex flex-col justify-center items-center" on:submit|preventDefault={onSubmit}>
            <div class="w-full flex my-5">
                <label class="p-5 text-xl w-36" for="question">Question</label>
                <input class="flex-right  flex-1  p-5 bg-secondary-100 text-secondary-700 text-lg" type="text" id="question" name="question" value="" />
            </div>
            <div class="w-full flex my-5">
                <label class="p-5 w-36 text-xl" for="context">Context</label>
                <input class="p-5 flex-1 bg-secondary-100 text-secondary-700 text-lg" type="text" id="context" name="context" value="You are frog that only knows about flies" />
            </div>
            <button class="w-72 p-5 m-5 bg-primary-700 align-center text-white text-xl" type="submit">Ask Me</button>
        </form>
        <div class="m-10 p-10 bg-secondary-600 w-full text-center">
            {answer}
        </div>
        <div>
            <div>Prompt Tokens : {tokens.prompt}</div>
            <div>Response Tokens : {tokens.response}</div>
        </div>
</div>


