<script>
  let link, description, base64, image
  let tags = []

  const removeTag = (element) => {
    tags = tags.filter(tag => tag !== element.target.innerText)
  }

  const checkTags = (element) => {
    let tag = element.target.value.trim()
    if (tag.length > 0 && element.key === " " && !tags.includes(tag)) {
        tags = [...tags, tag]
        element.target.value = ""
    }
  }

  const encodeImage = element => {
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
        image: base64,
        tags
    }
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
  }
</script>

<form class="form--container" on:submit={submit}>

    <div class="field--container">
        <label for="link">Link</label>
        <input type="text" name="link" id="link" bind:value={link} placeholder="Link" required/>
    </div>

    <div class="field--container">
        <label for="description">Description (Optional)</label>
        <input type="text" name="description" id="description" bind:value={description} placeholder="Description" />
    </div>

    <div class="field--container" id="tags--container">
        <label for="tags">Tags (Optional)</label>
        <input list="tags" name="tags" on:keypress={checkTags}/>
        <datalist id="tags">
        </datalist>
        <ul id="tags--list">
            {#each tags as tag}
                <li id="tag" on:click={removeTag} on:keydown={removeTag}>{tag}</li>
            {/each}
        </ul>
    </div>

    <div class="field--container">
        <label for="image">Picture (Optional)</label>
        <input type="file" name="image" id="image" on:change={encodeImage} bind:value={image}/>
    </div>

    <div class="field--container">
        <button>Submit</button>
    </div>

</form>

<style>
  form {
    width: 100%;
    height: 100%;
    align-self: flex-start;
  }

  label {
    margin-left: 3px;
  }
  
  input {
    width: 80%;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
  }
  
  .field--container {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  button {
    height: 50px;
  }

  #tags--list {
    display: flex;
    position: absolute;
    list-style: none;
    width: 100%;
    position: absolute;
    top: -20px;
    left: 70px;
  }

  #tag {
    background-color: rgb(148, 144, 144);
    border-radius: 5px;
    padding: 3px;
    margin-left: 5px;
  }
</style>