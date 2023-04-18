import { d as db } from "./mongo.js";
const links = db.collection("links");
export {
  links as l
};
