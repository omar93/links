<script>
    export let link;
</script>

<div>
    <h2>{link.link}</h2>
    <p>{link.description}</p>
    <span>{link.tags}</span>
    {#if link.image}
        <img src={link.image} alt="link" />
    {/if}
</div>

<style>
    span {
        border-radius: 100%;
    }
</style>