const express=require('express');
const app=express();
const port=3001;

const user = [{
    id: 35,  name: "Hamza Arif Khan", age: 28,
    
}]
// ======================----------------
app.get("/show", (req, res) => {
    res.json( user )
})
app.post("/add",(req,res)=>{
    const newUser=req.body;
    user.push(newUser)
    res.send("user is added")
})

app.listen(port,()=>{
    console.log("Server is running on the port," ,port)
})