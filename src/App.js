const express= require('express')
const app= express()

app.get("/users/:regno/:name/:password",(req,res)=>{
    console.log("The req are",req.params)
    res.send("data got")
})
app.get("/users+",(req,res)=>{
    res.send("Fetched data successfully")
})

app.get("/use?r(s)*",(req,res)=>{
    res.send("Fetched data successfully")
})
app.post("/user",(req,res)=>{
    res.send({"FirstName":"Harish",LastName:"Gotham"})
})
app.delete("/user",(req,res)=>{
    res.send("Deleted successfully")
})
app.patch("/user",(req,res)=>{
    res.send("Updated successfully")
})
app.use("/user",(req,res)=>{
res.send("Hello Iam Harish From Express")
})

app.listen(3500,()=>{
    console.log("server is listening on the port number 3500....")
})