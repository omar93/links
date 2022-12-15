import { links } from '../../db/links.js'
import { ObjectId } from 'mongodb'

export const POST = async ({ request }) => {
    const jsonData = await request.json()
    await links.deleteOne({ _id: ObjectId(jsonData._id) })
}