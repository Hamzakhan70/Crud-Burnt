// Q: if i do git commit at different time and in the end add all of them?

const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;

const user = [
  {
    id: 35,
    name: "Hamza Arif Khan",
    age: 28,
  },
];
// ======================----------------
app.get("/show", (req, res) => {
  res.json(user);
});
app.post("/add", (req, res) => {
  const newUser = req.body;
  user.push(newUser);
  res.send(user);
});

app.delete("/delete/:id", (req, res) => {
  const userId = req.params.id;
  console.log(userId)
  user.forEach((element) => {
      if (element.id == userId) {
        console.log("to be delete",element)
        // delete user[element]
        user.splice(element,1)
    };
    });
    console.log(user)
    res.json(user);
  
});

app.listen(port, () => {
  console.log("Server is running on the port,", port);
});
