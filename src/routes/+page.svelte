<script>
    import Link from "../components/link.svelte";
    export let data

    let link, description, base64, image, tags, inputField, fileinput
    
    const encodeImage = (e) => {
        console.log(fileinput.files);
        let image = fileinput.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            fileinput.files[0] = reader.result
            console.log("...................");
            console.log(fileinput.files[0]);
        };
    }

    const submit = async () => {
        let data = {
            link,
            description,
            base64: base64 || null,
            tags
        }
        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    const changeTags = element => {
        tags = element.target.value
    }
    
</script>

<h1>Kinda of a bookmark application</h1>

<form class="form--container" action="/" method="post">
    <!-- <form class="form--container" on:submit={submit}> -->
    <div class="field--container">
        <label for="link">Link</label>
        <input type="text" name="link" id="link" bind:value={link} placeholder="Link" />
    </div>

    <div class="field--container">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" bind:value={description} placeholder="Description" />
    </div>

    <div class="field--container">
        <label for="tags">Tags</label>
        <input list="tags" name="tags" on:change={changeTags}/>
        <datalist id="tags">
            <option value="Svelte" />
            <option value="Sapper" />
            <option value="JavaScript" />
            <option value="CSS" />
            <option value="HTML" />
        </datalist>
    </div>

    <div class="field--container">
        <label for="image">Picture</label>
        <input type="file" name="image" id="image" on:change={encodeImage} on:blur={encodeImage}/>

        <!-- <img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
        <input style="display:none" type="file" name="file" accept=".jpg, .jpeg, .png" on:change={(e)=>encodeImage(e)} bind:this={fileinput} > -->
    </div>

    <div class="field--container">
        <button>Submit</button>
    </div>

</form>

{#each data.links as link}
    <Link {link}/>
{/each}

<style>
    * {
        font-family: sans-serif;
    }
    h1 {
        text-align: center;
    }
    label {
        margin-left: 3px;
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