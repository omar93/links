import { CONNECTION_URL } from '$env/static/private'
import { MongoClient } from 'mongodb'

export const POST = async ({ request }) => {
    const formData = await request.json();

    const link = formData.link
    const description = formData.description
    const image = formData.base64

    let json = {
        link: link,
        description: description,
        image: image
    }

    console.log(json);
    
    const db = MongoClient.connect(CONNECTION_URL, (err, db) => {
        if (err) throw err;

        let dbo = db.db('links');

        dbo.collection('links').insertOne(json, (err , res) => {
            if (err) throw err;
            db.close();
        })
    })

    return new Response(JSON.stringify({ message: "Link saved" }), { status: 200 })
}


