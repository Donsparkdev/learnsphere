const mongoose = require("mongoose");


const lessonSchema = new mongoose.Schema({

title:{
    type:String,
    required:true
},

videoUrl:{
    type:String,
    default:""
},

duration:{
    type:String,
    default:""
},

resources:[
    String
],

createdAt:{
    type:Date,
    default:Date.now
}

course: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Course",
  required: true
},

order: {
  type: Number,
  default: 1
},

});


module.exports = mongoose.model(
"Lesson",
lessonSchema
);
