<script lang="ts">

    $:answer = "Hello how may I help you?";

    async function onSubmit(e) {
        answer = "Thinking..."

        const formData = new FormData(e.target);

        const data = {};
            for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        
        const response = await fetch('/openai/embed', {
            method: 'POST',
            body: JSON.stringify({ question: data.question, page: data.page}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let res = await response.json();
        answer = res.answer
    }
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
        <h1 class="h1 p-5 my-5">Open AI - Embedding Modeles</h1>
        <div class="p-2 bg-secondary-200 text-black">
            <p class="p-2 text-lg">In this example, we are showing a technique for the LLM to query data from a provided data set. Instead of the chat drwing on generalized information from the model, we are telling the LLM to read a specfific document and return the information. in this example, we are just reading from one web page, but more advanced models code read from multiple web pages, pdfs, or internal documents.</p>
            <p class="p-2 text-lg">This uses an API /openai/embed (POST) with the json request "question":"provided question" and "page":"full url to the page to embed"</p>
        </div>
        <form class="w-full flex flex-col justify-center items-center" on:submit|preventDefault={onSubmit}>
            <div class="w-full flex my-5">
                <label class="p-5 text-xl w-36" for="question">Question</label>
                <input class="flex-right  flex-1  p-5 bg-secondary-100 text-secondary-700 text-lg" type="text" id="question" name="question" value="What is a tracking code" />
            </div>
            <div class="w-full flex my-5">
                <label class="p-5 w-36 text-xl" for="page">Web Page</label>
                <input class="p-5 flex-1 bg-secondary-100 text-secondary-700 text-lg" type="text" id="page" name="page" value="https://support.moderncampus.com/cms/glossary.html" />
            </div>
            <button class="w-72 p-5 m-5 bg-primary-700 align-center text-white text-xl" type="submit">Ask Me</button>
        </form>
        <div class="m-10 p-10 bg-secondary-600 w-full text-center">
            {answer}
        </div>
</div>


