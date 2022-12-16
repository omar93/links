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
         
        let json = {
            link,
            description,
            image,
            tags
        }
        links.insertOne(json)
    }
}


