<script>
    export let link;
    let tags = link.tags
</script>

<div id="container">
    
    {#if link.image}
        <img src={link.image} alt="link" />
    {/if}

    <div id="text--container">
        <a href={link.link} target="blanc">
            <h2>{link.link}</h2>
        </a>
        <p>{link.description}</p>
        {#each tags as tag}
            <span>{tag}</span>
        {/each}
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
    }
    h2 {
        margin: 0;
        cursor: pointer;
    }
    img {
        height: 100px;
    }
    #text--container {
        margin-left: 10px;
    }
    span {
        background-color: gray;
        border-radius: 10px;
        padding: 5px;
    }
</style>