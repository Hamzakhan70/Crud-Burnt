// Q: if i do git commit at different time and in the end add all of them?

const express = require("express");
const app = express();
const mongodb = require("mongodb");
app.use(express.json());
const port = 3001;
const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const connection = async () => {
  let result = await client.connect();
  let db = result.db("Employees");
  return db.collection("users");
};
const user = [
  {
    id: 35,
    name: "Hamza Arif Khan",
    age: 28,
  },
];
app.get("/show", async (req, res) => {
  let data = await connection();
  data = await data.find().toArray();
  res.send(data);
});
app.get("/getOne/:id", async (req, res) => {
  const userId = Number(req.params.id);
  let data = await connection();
  data = await data.findOne({ id: userId });
  console.log(data);
  res.send(data);
});
app.post("/add", async (req, res) => {
  const newUser = req.body;
  let data = await connection();
  let result = await data.insertMany(newUser);
  res.send(result);
});
app.put("/update/:id", async (req, res) => {
  const updation = req.body;
  const updateId = req.params.id;
  const data = await connection();
  const result = await 
  data.updateOne({id: updateId }, {$set: updation} );
  res.json(result);
});
app.delete("/delete/:id", async (req, res) => {
  const userId = req.params;
  const data = await connection();
  let result = await data.deleteOne(userId);
  console.log(result, "result is");
  res.json(result);
});
app.listen(port, () => {
  console.log("Server is running on the port,", port);
});
