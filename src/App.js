const express= require('express')
const app= express()
   app.get("/",(req,res)=>{
   res.send("Hello Iam Harish From Express")
   })
   app.get("/test",(req,res)=>{
    res.send("Hello Iam Harish From Express test")
   })
   app.get("/hello",(req,res)=>{
    res.send("Hello Iam Harish From Express")
   })
  

app.listen(3500,()=>{
    console.log("server is listening on the port number 3500....")
})