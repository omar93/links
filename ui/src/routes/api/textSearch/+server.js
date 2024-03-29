import { links } from '../../../db/links.js'
import { json } from '@sveltejs/kit'

export async function POST({ request }) {

  const search = await request.json()

  const dbData = await links.find({$text: { $search: "sosse" } }).toArray()

  return json(dbData)
}