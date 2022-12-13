import { CONNECTION_URL } from '$env/static/private'
import { links } from '$lib/db/mongo.js'
import { MongoClient } from 'mongodb'

export const POST = async ({ request }) => {
    const formData = await request.json();

    const link = formData.link
    const description = formData.description
    const image = formData.base64
    const tags = formData.tags

    let json = {
        link: link,
        description: description,
        image: image,
        tags: tags
    }
    
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


export const GET = async () => {
    let response
    const db = MongoClient.connect(CONNECTION_URL, (err, db) => {
        if (err) throw err;

        let dbo = db.db('links');

        dbo.collection('links').find({}).toArray((err, result) => {
            if (err) throw err;
            db.close();
            response = (JSON.stringify({'data':result}), { status: 400 })
        })
    })
    
    return new Response(response)
}


