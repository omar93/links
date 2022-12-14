import { links } from '../db/links.js'

export const load = async () => {
    const data = await links.find().toArray()
    return {
        links: JSON.parse(JSON.stringify(data))
    }
}

export const actions =  {

    default: async ({ request }) => {

        const formData = await request.formData();

        const link = formData.get('link')
        const description = formData.get('description')
        const image = formData.get('image')
        const tags = formData.get('tags')

        console.log(tags[0]);
        console.log(tags[1]);
         
        let json = {
            link,
            description,
            image,
            tags
        }
        console.log(json);
        links.insertOne(json)
    }
}


