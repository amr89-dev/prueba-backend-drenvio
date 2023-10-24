const mongoose = require("mongoose");
require("dotenv").config();

const { DB_USER, DB_PASSWORD } = process.env;

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:270
17,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;

const DB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connected");

    const db = mongoose.connection.db;

    const collectionNames = ["brands", "clients", "products"];

    const documents = await db.collection("users").find({}).toArray();

    documents.forEach((document) => {
      console.log(document);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = DB;
