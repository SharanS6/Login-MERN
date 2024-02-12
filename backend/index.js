const express =require("express")
const cors =require("cors")
const mongoose =require("mongoose")

const app= express();
var corsOptions={origin:['https://login-mern-frontend-iota.vercel.app/'],}
app.use(cors(corsOptions))
app.use(express.json())
mongoose.set('strictQuery', true);


mongoose.connect("mongodb+srv://sharan:123@cluster0.stpyira.mongodb.net/login?retryWrites=true&w=majority").then(
    function(){
        console.log("Connected to DB...")
    }
).catch(function(){
    console.log("DB connection failed...")
})

const login=mongoose.model("login",{fname: {
    type: String,
   
  },
  lname: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  pw: {
    type: String,
   
  }},"Logindetails")


app.get("/",function(req,res)
{
    res.send("server is connected")
})
app.listen(5000,function(){
    console.log("server connected")
})


app.get("/userlist",function(req,res)
{
    login.find().then( function(retdata){
        console.log(retdata)
        res.send(retdata)
    })
    
})

app.post("/userlist",function(req,res){
    
      var emailcheck=req.body.email
      var pwcheck=req.body.pw
      console.log("email: "+emailcheck,"pw :"+pwcheck)
      login.findOne({email:emailcheck}).then(function(data)
      {
        
        if(data ==null)
        {
            res.send(false)
            console.log(data)
        }
        else{
            console.log(data)
            res.send(data)
        }
      }).catch(function(error)
      {
        res.send(error)
      })

})

app.post("/adduser", async function(req,res){

console.log(req.body.newuser)
    const newPost = new login({
    
        fname:req.body.newuser.fname,
        lname:req.body.newuser.lname,
        email:req.body.newuser.email,
        pw:req.body.newuser.pw,
        // Other fields as needed
      });
      const savedPost = await newPost.save().then(function(){
        console.log("Saved sucessfully")

        res.send(true)
        
      }).catch(function(error){
        res.send(false)
        console.log("check the email")
      });

    // const newUseradding=new login(
    //     {
    //         newone:req.body.newuser
    //     }
    // )
    // newUseradding.save().then(function()
    // {
        
    //     console.log("saved succesfully")
    //     res.send(true)
    // }).catch(function(){
    //     res.send(false)
    // })
    // const checkadd =new login(
    //     {
    //         newone:"hello"
    //     }
    // )

    // checkadd.save().then(function(){
    //     console.log("saved")
    // })
   
    


})


