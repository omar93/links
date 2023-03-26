<script>
    import { createEventDispatcher } from 'svelte'
    
    export let link

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
        let element = document.createElement('p')
        element.textContent = 'Successfully Copied'
        element.className = 'show'
        document.querySelector('#image--container').appendChild(element)
        setTimeout(() => {
            element.remove()
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
            <span on:click={clickSearch}>{tag}</span>
        {/each}
        </div>
    </div>

    <button on:click={deleteLink}>X</button>
    <img src="./copy.png" alt="copy" id="copy" on:click={copyLink} on:keypress={() => console.log()}/>

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
    #icon {
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
    #copy {
        width: 25px;
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
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
    }
    span {
        background-color: rgba(128, 128, 128, 0.623);
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