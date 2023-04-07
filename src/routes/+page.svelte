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
    <div id="form--container">
        <NewLink/>
    </div>
    {/if}

    <div id="link--container">

        <div class="field--container" id="search--container">
            <input type="text" name="search" id="search" placeholder="Search" on:keypress={search}>
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
        width: 20%;
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
        flex-direction: column;
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