import { CONNECTION_URL } from '$env/static/private'
import { MongoClient, ObjectId } from 'mongodb'

export const POST = async ({ request, locals }) => {
    console.log("we got a post");
    const { id } = params
    const db = await MongoClient.connect(CONNECTION_URL)
    console.log(db);
    const collection = db.collection('users')
    let user
    try {
        user = await collection.findOne({ _id: ObjectId(id) })
    } catch (error) {
        console.log(error)
    }
    db.close()
    return {
        body: user
    }
}