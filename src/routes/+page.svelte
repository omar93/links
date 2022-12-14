<script>
    import Link from "../components/link.svelte";
    export let data

    let link, description, base64, image
    let links = data.links
    let tags = ['funny', 'tutorial']
    
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
        console.log(data);
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(response);
    }

    const changeTags = element => {
        tags = element.target.value
    }

    const checkTags = (element) => {
        console.log(element.key);
        if (element.key === " ") {
            tags = [...tags, element.target.value]
            element.target.value = ""
        }
        console.log(tags);
    }

    const removeTag = (element) => {
        tags = tags.filter(tag => tag !== element.target.innerText)
    }

    const search = async element => {
        if (element.key === "Enter") {
            let arr = element.target.value.split(" ")
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    search: arr
                })
            })
            // filter list items that container elements value
            links = links.filter(link => link.link.includes(element.target.value))

        }
    }
    
</script>

<div id="top--container">
    <h1>Kinda of a bookmark application</h1>
</div>

<!-- <form class="form--container" action="/" method="post"> -->
    <div id="bottom--container">
        <div id="form--container">
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
                    <input list="tags" name="tags" on:change={changeTags} on:keypress={checkTags}/>
                    <datalist id="tags">
                        <option value="Svelte" />
                        <option value="Sapper" />
                        <option value="JavaScript" />
                        <option value="CSS" />
                        <option value="HTML" />
                    </datalist>
                    <ul id="tags--list">
                        {#each tags as tag}
                            <li id="tag" on:click={removeTag}>{tag}</li>
                        {/each}
                    </ul>
                </div>
            
                <div id="file--container">
                    <label for="image">Picture (Optional)</label>
                    <input type="file" name="image" id="image" on:change={encodeImage} bind:value={image}/>
                </div>
            
                <div class="field--container">
                    <button>Submit</button>
                </div>
            
            </form>
        </div>

        <div id="link--container">
            <div class="field--container" id="search--container">
                <label for="search">Search</label>
                <input type="text" name="search" id="search" placeholder="Search" on:keypress={search}>
            </div>
            <div id="links--container">
                {#each links as link}
                    <Link {link}/>
                {/each}
            </div>
        </div>

    </div>


<style>
    * {
        font-family: sans-serif;
    }
    #top--container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
    }
    #bottom--container {
        display: flex;
        width: 100%;
        height: 100%;
    }
    #form--container {
        width: 30%;
        align-self: flex-start;
    }
    #link--container {
        width: calc(70% - 14px);
    }
    #links--container {
        width: calc(70% - 14px);
        flex: 1 1 auto;
        overflow-y: auto;
        height: 75vh;
        width: 100%;
    }
    #search--container {
        width: 50%;
        margin-left: 25%;
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
        width: 80%;
        margin-left: 5%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
    }
    input {
        width: 100%;
        height: 20px;
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
        margin-top: 30px;
    }
    #file--container {
        margin-top: 45px;
    }
    #tags--container {
        position: relative;
    }
    #tags--list {
        display: flex;
        position: absolute;
        list-style: none;
        width: 100%;
        position: absolute;
        top: 65px;
        left: -43.5px;
    }
    #tag {
        background-color: rgb(148, 144, 144);
        border-radius: 5px;
        padding: 3px;
        margin-left: 5px;
    }
</style>