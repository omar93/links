import { l as links } from "../../../chunks/links.js";
import { ObjectId } from "mongodb";
const POST = async ({ request }) => {
  const jsonData = await request.json();
  await links.deleteOne({ _id: ObjectId(jsonData._id) });
};
export {
  POST
};
