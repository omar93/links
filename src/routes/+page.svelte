<script>
    import NewLink from "../components/newLink.svelte"
    import Link from "../components/link.svelte"

    export let data

    let visable = false
    let links = data.links

    const deleteLink = (element) => {
        links = links.filter(link => link._id !== element.detail._id)
    }
    
    const clickSearch = async target => {
        let tag = target.detail
        const response = await fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tag})
        })
    }
    
</script>

<div id="container">
    
    {#if visable}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="form--container" on:click|self={() => visable = false}>
        <div id="form">
            <NewLink on:close={() => visable = false}/>
        </div>
    </div>
    {/if}

    <div id="link--container">

        <div class="field--container" id="search--container">
            <input type="text" name="search" id="search" placeholder="Search" on:keypress={search}>
            <button on:click={() => visable = true}>New Link</button>
        </div>

        <div id="links--container">
            {#each links as link}
                <Link {link} on:delete={deleteLink} on:clickSearch={clickSearch}/>
            {/each}
        </div>

    </div>

</div>


<style>
    * {
        font-family: sans-serif;
    }

    #form--container {
        position: absolute;
        width: 99%;
        height: 99%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    #form {
        width: 55%;
        height: 75%;
        margin-left: 25%;
        margin-top: 5%;
        background-color: white;
        border-radius: 5px;
        padding: 10px;
        -webkit-box-shadow: 2px 2px 12px 7px rgba(0,0,0,0.76); 
        box-shadow: 2px 2px 12px 7px rgba(255, 255, 255, 0.76);
    }

    #container {
        display: flex;
        width: 100%;
        height: 100%;
    }

    #link--container {
        width: 100%;
    }

    #links--container {
        width: calc(70% - 14px);
        flex: 1 1 auto;
        overflow-y: auto;
        height: 100%;
        width: 100%;
    }

    #search--container {
        width: 50%;
        margin-left: 25%;
        display: flex;
    }

    input {
        width: 100%;
        height: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
    }

    .field--container {
        width: 100%;
        margin-top: 30px;
    }
</style>