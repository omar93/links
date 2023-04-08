import { links } from '../../../db/links.js'
import { json } from '@sveltejs/kit'

export async function POST({request, params}) {

  const search = await request.json()
  
  let searchTag = search.tag

  const dbData = await links.find({tags: searchTag}).toArray()

  return json(dbData)
}