<script lang="ts">


    let items = [
        {   
            "title":"Simple Question",
            "content":"This is an example of using Open AI with a single request. The purpose of the example is to show how to makes a request to open AI with Lang chain in basic form.",
            "url":"/openai/simple"

        },
        {
            "title":"Prompted Question",
            "content":"This is an example of how to focus the context of the conversation. This helps provide more control of the of the response.",
            "url":"/openai/prompt"
        },
        {
            "title":"In Context Chat",
            "content":"This is an example of having a chat wit the AI. The previous conversation refines the overall context of the chat.",
            "url":"/openai/chat"
        },
        {
            "title":"Questions with an Embed Model",
            "content":"This is an example of how tell the LLm to only provid information from a provided data model",
            "url":"/openai/embed"
        },
        {
            "title":"Chat with an Embed Model",
            "content":"This is an example of having a chat with embedded data.",
            "url":"/openai/embed/chat"
        },
    ]
</script>



<div class="container h-full mx-auto flex flex-col justify-top items-center">
            <h1 class="h1 p-10">Open AI Examples</h1>

            <div class="flex flex-row flex-wrap justify-center items-center">
                {#each items as item}
                    <div class="m-5 w-96 h-64 border-md">
                        <a href="{item.url}">
                        <div class="card bg-primary-700 h-full">
                            <header class="card-header bg-primary-700 hover:bg-pprimary-900 p-5 text-xl text-center">{item.title}</header>
                            <section class="p-4 text-center text-white">{item.content}</section>
                        </div>
                        </a>
                    </div> 
                {/each}
            </div>
</div>