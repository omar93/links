import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function POST({request, params}) {
  const searchTerm = await request.json();
  console.log(searchTerm.term);
  return json("Hello World");
}