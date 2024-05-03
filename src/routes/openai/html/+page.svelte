<script lang="ts">
	/** @type {number} */
	let number;

    $:answer = "<p>HTML goes here</p>";
    $:tokens = {prompt:0,response:0}


    async function onSubmit(e) {
        answer = "<p>Working...</p>"

        const formData = new FormData(e.target);

        const data = {};
            for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        
        const response = await fetch('/openai/html', {
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
        <h1 class="h1 p-5 my-5">Open AI - HTML response</h1>
        <div class="p-2 bg-secondary-200 text-black w-full">
            <p class="p-2 text-lg">In this example, The context behind the scenes is setting up the response to be html</p>
            <p>Make a request of the html that you want to appear in the section below</p>
        </div>
        <form class="w-full flex flex-col justify-center items-center" on:submit|preventDefault={onSubmit}>
            <div class="w-full flex my-5">
                <label class="p-5 text-xl w-36" for="question">Request</label>
                <input class="flex-right  flex-1  p-5 bg-secondary-100 text-secondary-700 text-lg" type="text" id="question" name="question" value="" />
            </div>
            <button class="w-72 p-5 m-5 bg-primary-700 align-center text-white text-xl" type="submit">Generate</button>
        </form>
        <div>
            <div>Prompt Tokens : {tokens.prompt}</div>
            <div>Response Tokens : {tokens.response}</div>
        </div>
        <iframe class="m-5 p-5 bg-white w-full text-black" height="500" srcdoc={answer}></iframe>
        <code class="language-html">
            {answer}
        </code>        
</div>

