import { links } from '../../../db/links.js'
import { json } from '@sveltejs/kit'

export async function POST({ request }) {

  const search = await request.json()

  const dbData = links.find({"description":{$regex:/golf/i}})

  console.log(dbData)

  return json(dbData)
}