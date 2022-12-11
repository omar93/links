<script>
    let link, description, image, base64

    const encodeImage = (element) => {
        let file = element.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', () => {
            base64 = reader.result
        })
    }

    const submit = async () => {
        
        let data = {
            link,
            description,
            base64: base64 || null
        }

        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }        
</script>

<h1>Kinda of a bookmark application</h1>

<form class="form--container" on:submit={submit}>
    <div class="field--container">
        <label for="link">Link</label>
        <input type="text" name="link" id="link" bind:value={link} placeholder="Link" />
    </div>

    <div class="field--container">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" bind:value={description} placeholder="Description" />
    </div>

    <div class="field--container">
        <label for="image">Picture</label>
        <input type="file" name="image" id="image" bind:value={image} on:change={encodeImage} />
    </div>

    <div class="field--container">
        <button>Submit</button>
    </div>

</form>

<style>
    * {
        font-family: sans-serif;
    }

    h1 {
        text-align: center;
    }
    .form--container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin-left: 25%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
    }
    .form--container input {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
    }
    .form--container button {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
        background-color: #fff;
    }

    .form--container button:hover {
        background-color: #ccc;
    }

    .field--container {
        width: 100%;
        margin-top: 25px;
    }
</style>