import { links } from '../db/links.js'

export const load = async () => {
    const data = await links.find().toArray()
    return {
        links: JSON.parse(JSON.stringify(data))
    }
}

export const actions =  {

    korvar: async ({ request }) => {

        const formData = await request.formData();

        const link = formData.get('link')
        const description = formData.get('description')
        const base64 = formData.get('base64')
        const tags = formData.get('tags')

        let json = {
            link: link,
            description: description,
            image: base64,
            tags: tags
        }

        links.insertOne(json)
    }
}


