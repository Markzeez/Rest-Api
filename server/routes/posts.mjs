import express from "express"
import db from "../db/conn.js"

const postsRoutes = express.Router()


// Get a list of 50 posts
postsRoutes.get("/", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
    let collection = await db.collection("posts");
    let results = await collection.find({})
      .limit(50)
      .toArray();
    res.send(results).status(200);
  });

// Fetches the latest posts
postsRoutes.get("/latest", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
    let collection = await db.collection("posts");
    let results = await collection.aggregate([
      {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
      {"$sort": {"date": -1}},
      {"$limit": 5}
    ]).toArray();
    res.send(results).status(200);
  });

// Get a single post
postsRoutes.get("/:id", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
    let collection = await db.collection("posts");
    let query = {_id: ObjectId(req.params.id)};
    let result = await collection.findOne(query);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

  // Add a new document to the collection
postsRoutes.post("/", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
    let collection = await db.collection("posts");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });

  // Update the post with a new comment
postsRoutes.patch("/comment/:id", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
    const query = { _id: ObjectId(req.params.id) };
    const updates = {
      $push: { comments: req.body }
    };
    let collection = await db.collection("posts");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  });

  // Delete an entry
postsRoutes.delete("/:id", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
    const query = { _id: ObjectId(req.params.id) };
    const collection = db.collection("posts");
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
  });


export default postsRoutes




