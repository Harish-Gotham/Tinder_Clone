const authenticate=(req,res,next)=>{
    const token="OM"
    console.log("authentication step")
    const authenticate=token==="OM"
    if(!authenticate){
        res.status(401).send("Unauthorized request")
    }
    else{
       
        next()
    }
}

const user=(req,res,next)=>{
    const token="OM"
    console.log("user data got fetched")
    const authenticate=token==="OM"
    if(!authenticate){
        res.status(401).send("Unauthorized user")
        console.log("user data got  not fetched")
    }
    else{
       
        next()
    }
}
module.exports={authenticate,user}