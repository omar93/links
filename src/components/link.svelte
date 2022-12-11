<script>

    let link = ''
    let description = ''
    let image = ''

    const encodeImage = () => {
        let file = image.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', () => {
            base64 = reader.result
        })
    }
    
</script>

<div id="link--container">
    <div class="link--container">
        <a href="{link}" target="_blank">
            <h2>{link}</h2>
        </a>
        <p>{description}</p>
        {#if base64}
            <img src="{base64}" alt="{description}" />
        {/if}
    </div>
</div>