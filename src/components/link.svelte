<script>
    import { createEventDispatcher } from 'svelte'
    
    export let link
    
    const dispatch = createEventDispatcher()

    const deleteLink = async () => {
        await fetch('/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        })
        dispatch('delete', link)
    }
</script>

<div id="container">
    
    {#if link.image}
        <img src={link.image} alt="link" />
    {:else}
        <img src={"./bookmark.png"} alt="link" />
    {/if}

    <div id="text--container">
        <a href={link.link} target="blanc">
            <h2>{link.link}</h2>
        </a>
        <p>{link.description}</p>
        {#each link.tags as tag}
            <span>{tag}</span>
        {/each}
    </div>

    <button on:click={deleteLink}>X</button>

</div>

<style>
    #container {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        margin-top: 10px;
        position: relative;
    }
    h2 {
        margin: 0;
        cursor: pointer;
    }
    img {
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
    #text--container {
        margin-left: 10px;
    }
    span {
        background-color: gray;
        border-radius: 10px;
        padding: 5px;
    }
    button {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
</style>