const mongoose = require('mongoose');

// schema 
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category:{
    type:String,
    require:true
  },
  teacher:{
    type: String,
    require:true
  },
  price:{
    type:String,
    require:true,
  }
  ,
  createdAt: {
    type: Date,
    default: Date.now
  },
  videos: [
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      views: {
        type: Number,
        default: 0
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      "link" : {
        type: String,
        required: true
      },
      "Video_length":{
       type: Number,
       default:0 
      }
    }
  ]
});

//  course
const courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;
