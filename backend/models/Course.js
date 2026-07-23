const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema({

title:{
    type:String,
    required:true
},

description:{
    type:String,
    required:true
},

thumbnail:{
    type:String,
    default:""
},

category:{
    type:String,
    required:true
},

level:{
    type:String,
    enum:["Beginner","Intermediate","Advanced"],
    default:"Beginner"
},

instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},


rating:{
    type:Number,
    default:0
},

createdAt:{
    type:Date,
    default:Date.now
}


});


module.exports = mongoose.model(
"Course",
courseSchema
);
