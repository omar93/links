import { MongoClient } from "mongodb";
const CONNECTION_URL = "mongodb://omar:omar696798100@192.168.1.200:27017/?authMechanism=DEFAULT";
const client = new MongoClient(CONNECTION_URL);
function start_mongo() {
  console.log("connecting to MongoDB...");
  return client.connect();
}
const db = client.db("links");
export {
  db as d,
  start_mongo as s
};
