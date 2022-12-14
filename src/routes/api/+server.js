import { links } from '../../db/links.js'

export const POST = async ({ request }) => {

    const formData = await request.json();

    const searchArr = formData.search
    
    const data = await links.find().toArray()

    let dbData = JSON.parse(JSON.stringify(data))

    console.log("prefiltered data: ", dbData);
    
    searchArr.forEach(searchWord => {
        dbData = dbData.filter(link => {
            return link.tags.includes(searchWord)
        })
        dbData = dbData.filter(link => {
            return link.description.includes(searchWord)
        })
    });

    console.log("filtered data: ", dbData);


    return new Response(String({links: JSON.parse(JSON.stringify(data))}));
}
