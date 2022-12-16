import { links } from '../db/links.js'

export const POST = async ({request}) => {
    const {link, description, image, tags} = await request.json();
    links.insertOne({
        link,
        description,
        image,
        tags
    })
}