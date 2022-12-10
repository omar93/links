<script>
    let name, description, image

    const postLink = () => {
        let json = {
            name,
            description,
            image
        }
        console.log(json);
    }
</script>

<h1>Kinda of a bookmark application</h1>

<form class="form--container" action="?/post" method="post">
    <div class="field--container">
        <label for="link">Link</label>
        <input type="text" name="link" id="link" bind:value={name} placeholder="Link" />
    </div>

    <div class="field--container">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" bind:value={description} placeholder="Description" />
    </div>

    <div class="field--container">
        <label for="picture">Picture</label>
        <input type="file" name="picture" id="picture" bind:value={image} />
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