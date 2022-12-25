<script>
    import { createEventDispatcher } from 'svelte'
    
    export let link

    let element

    if(link.image === null) {
        link.image = './bookmark.png'
    } 
    
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
            <h2>{link.link}</h2>
        </a>
        <p>{link.description}</p>
        {#each link.tags as tag}
            <span>{tag}</span>
        {/each}
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
    h2 {
        margin: 0;
        cursor: pointer;
    }
    #image--container {
        position: relative;
        cursor: pointer;
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



    #snackbar {
        visibility: hidden;
        color: #fff;
        background-color: #333;
        min-width: 250px;
        margin-left: -125px;
        border-radius: 2px;
        padding: 16px;
        text-align: center;
        left: 50%;
        bottom: 30px;
        z-index: 1;
        position: absolute;
    }

    /* This will be activated when the snackbar's class is 'show' which will be added through JS */
    .show {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    .gemberss {
        visibility: hidden;
    }

    /* Animations for fading in and out */
    @-webkit-keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }

    @keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }
</style>