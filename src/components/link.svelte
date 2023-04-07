<script>
    import { createEventDispatcher } from 'svelte'
	import { fade, fly } from 'svelte/transition'
    
    export let link

    let visable = false

    if(link.image === null) {
        link.image = './bookmark.png'
    }

    const dispatch = createEventDispatcher()

    const clickSearch = (e) => {
        let tag = e.target.textContent
        dispatch('clickSearch', tag)
    }

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

    const copyLink = () => {
        navigator.clipboard.writeText(link.link)
        visable = true
        setTimeout(() => {
            visable = false
        }, 1000)
    }
</script>

<div id="container">

    <div id="image--container">
        <img src={link.image} alt="link" id="icon"/>
    </div>


    <div id="text--container">
        <a href={link.link} target="blanc">
            <h3>{link.link}</h3>
        </a>
        <p>{link.description}</p>
        <div id="tag--wrapper">
        {#each link.tags as tag}
            <span on:click={clickSearch} on:keypress={() => console.log()}>{tag}</span>
        {/each}
        </div>
    </div>
    
    <div id="buttons--container">
        <button id="delete" on:click={deleteLink}>X</button>
        <div id="copy--container">
            {#if visable}
                <p id="copied" in:fly="{{ y: -50, duration: 500 }}" out:fade>Successfully Copied</p>
            {/if}
            <img src="./copy.png" alt="copy" id="copy" on:click={copyLink} on:keypress={() => console.log()}/>
        </div>
    </div>
        
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

    #image--container {
        position: relative;
        cursor: pointer;
    }

    #icon {
        height: 100px;
        width: 100px;
        object-fit: cover;
        border-radius: 10px;
    }

    #text--container {
        margin-left: 10px;
        width: 85%;
        overflow: hidden;
    }

    a > h3 {
        margin: 0;
    }
    
    #tag--wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    #tag--wrapper > span {
        margin-left: 5px;
        cursor: pointer;
        padding-left: 10px;
        padding-right: 10px;
    }

    span {
        background-color: rgba(128, 128, 128, 0.623);
        border-radius: 10px;
        padding: 5px;
    }

    button {
        right: 10px;
        top: 10px;
        cursor: pointer;
    }

    #buttons--container {
        width: 12.5%;
        display: flex;
        flex-direction: column;
    }

    #delete {
        width: 12.5%;
        margin-left: 86%;
        background-color: red;
        color: white;
        border: 3px solid red;
    }

    #copied {
        position: absolute;
        margin-top: 4%;
        border: 2px solid green;
        background-color: green;
        color: white;
        padding: 0.5em;
        border-radius: 10px;
    }

    #copy {
        width: 30px;
        height: 40px;
        cursor: pointer;
        margin-left: 86%;
        margin-top: 20%;
    }
</style>