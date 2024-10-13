
const mongoose = require("mongoose")
const Schema=mongoose.Schema



const fileSchema=new Schema({
    filename:{type:String,required:true},
    path:{type:String,required:true},
    size:{type:Number,required:true},
    uuid:{type:String,reuired:true},
    sender:{type:String,reuired:false},
    receiver:{type:String,reuired:false},

}, {timestamps:true})


module.exports = mongoose.model('File', fileSchema)

