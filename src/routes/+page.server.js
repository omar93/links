import { CONNECTION_URL } from '$env/static/private'
import { MongoClient, ObjectId } from 'mongodb'

export const actions = {
    post : async ({ cookies, request }) => {
        const data = await request.formData();
        const link = data.get('link');
        const description = data.get('description');
        let image = data.get('image');

        let json = {
            link: link,
            description: description,
            image: image
        }
        console.log("json", json);
        const { id } = event.params
        const db = await MongoClient.connect(CONNECTION_URL)
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
  }