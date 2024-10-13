//const connectDB =require('./config/db') 
//connectDB()
const mongoose=require("mongoose")
const express=require("express")
const app= express()
const path=require('path')

mongoose.connect('mongodb://127.0.0.1:27017/user')
const connectDB=require('./config/db')
app.use(express.static('public'))
//connectDB;


async function startServer() {
  //template engine
  app.set('views',path.join(__dirname,'/views'))
  app.set('view engine','ejs')
 
    // ROUTES
    app.use('/api/files', require('./routes/files'))
    app.use('/files', require('./routes/show'))
    app.use('/files/download',require('./routes/download'))

    app.listen(6001, () => {
      console.log(`Listening on port 6001`);
    });
  
    app.get("/users",(req,res)=>{
      res.send("hello");

    })
   
  }
  




  startServer();
