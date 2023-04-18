import { CONNECTION_URL } from '$env/static/private'
import { MongoClient } from 'mongodb'

const client = new MongoClient(CONNECTION_URL)

export function start_mongo() {
    console.log("connecting to MongoDB...");
    return client.connect()
}

export default client.db('links')