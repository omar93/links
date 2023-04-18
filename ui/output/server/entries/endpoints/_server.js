import { l as links } from "../../chunks/links.js";
const POST = async ({ request }) => {
  const { link, description, image, tags } = await request.json();
  links.insertOne({
    link,
    description,
    image,
    tags
  });
};
export {
  POST
};
