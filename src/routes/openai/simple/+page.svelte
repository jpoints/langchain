<script lang="ts">
	
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
        
        const response = await fetch('/openai/simple', {
            method: 'POST',
            body: JSON.stringify({ question: data.question}),
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
        <h1 class="h1 p-5">Open AI - Simple Question</h1>
        <p class="p-5 text-lg">In this example, we are making a single request to Open AI. This approach is to show a basic example that all other cases are built upon.</p>
        <p class="p-5 text-lg">This uses an API /openai/simple (POST) with the json request "question":"provided question"</p>
        <form class="w-full" on:submit|preventDefault={onSubmit}>
            <div class="inline">
                <label class="inline p-5 text-xl hidden" for="question">Ask a Question</label>
                <input class="inline p-5 w-3/4 bg-secondary-100 text-secondary-700 text-lg" placeholder="Ask me a question" type="text" id="question" name="question" value="" />
            </div>
            <button class="inline w-64 p-5 m-5 bg-primary-700 align-center text-white text-xl" type="submit">Ask Me</button>
        </form>
        <div class="m-10 p-10 bg-secondary-600 w-full text-center">
            {answer}
        </div>
        <div>
            <div>Prompt Tokens : {tokens.prompt}</div>
            <div>Response Tokens : {tokens.response}</div>
        </div>
</div>


