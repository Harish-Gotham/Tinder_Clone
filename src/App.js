const express= require('express')
const {authenticate,user}=require('./middlewares/Authentication')//Node.js requires relative paths for local files.
const app= express()

// app.get("/users/:regno/:name/:password",(req,res)=>{
//     console.log("The req are",req.params)
//     res.send("data got")
// })
// app.get("/users+",(req,res)=>{
//     res.send("Fetched data successfully")
// })

// app.get("/use?r(s)*",(req,res)=>{
//     res.send("Fetched data successfully")
// })
// app.post("/user",(req,res)=>{
//     res.send({"FirstName":"Harish",LastName:"Gotham"})
// })
// app.delete("/user",(req,res)=>{
//     res.send("Deleted successfully")
// })
// app.patch("/user",(req,res)=>{
//     res.send("Updated successfully")
// })
// app.use("/user",
//     [(req,res,next)=>{
//         next()
//         console.log("First response only")
//     res.send("Hello Iam Harish From Express");
//     },(req,res,next)=>{
//         next()
//         console.log("2nd response ")
//     res.send("This is the 2nd response")
//     }],
// (req,res,next)=>{
//     // res.send("This is the 3rd response")
//     next();
// })


app.use('/admin',authenticate)
app.get('/user',user,(req,res,next)=>{
    res.send("all data sent")
})

app.get('/admin/getData',(req,res,next)=>{
 res.send("Data got fetched successfully")
}) 

app.post('/admin/sendData',(req,res,next)=>{
res.send("Data sent successfully")
})

app.delete('/admin/sendData',(req,res,next)=>{
    res.send("Data deleted successfully")
})



app.listen(3500,()=>{
    console.log("server is listening on the port number 3500....")
})