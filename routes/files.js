
const router=require('express').Router()
const multer=require('multer')
const path=require('path')
const File=require('../models/file')
const {v4:uuid4}=require('uuid')
require('dotenv').config();



let storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,'uploads/'),
    filename:(req,file,cb)=>{
        const uniqueName=`${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`
        cb(null,uniqueName)
    }
})
   

let upload=multer({
    storage,
    limit:{fileSize:1000000*100}
}).single('myfile')



router.post('/',(req,res)=>{

    //store file

upload(req,res,async(err)=>{
    //Validate request
    //if(!req.file){
      // return res.json({error:'all fields are required.'})
   //


    if(err){
        return res.status(500).send({error:err.message})
    }
 //store into database

 const file=new File({
    filename:req.file.filename,
    uuid:uuid4(),
    path:req.file.path,
    size:req.file.size


 });
   const response= await file.save()
   console.log('APP_BASE_URL:', process.env.APP_BASE_URL);

   return res.json({file:`${process.env.APP_BASE_URL}/files/${response.uuid}`})
   //http://localhost:6001/files/23463hjsdgjhj-234jhknhh
})
    //store into database
    //response->link
})


module.exports=router