const router =require('express').Router();
//const router = express.Router();

//import File from '../models/file';
const File=require('../models/file')

router.get('/:uuid',async(req,res)=>{
    try{
    const file=await File.findOne({uuid:req.params.uuid})
    if(!file){
        return res.render('download',{error:'link has been expired'})
    }

    return res.render('download',{
        uuid:file.uuid,
        filename:file.filename,
        fileSize:file.fileSize,
        downloadLink:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        //http://localhost:3000/files/download/szdxb-sdfcgh
    })
}catch(err){
    return res.render('download',{error:'something went wrong'})
}

})
module.exports=router