import { s as start_mongo } from "./mongo.js";
start_mongo().then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error: ", err);
});
