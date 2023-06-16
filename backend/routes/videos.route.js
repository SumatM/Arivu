const express  = require('express');
const courseModel = require('../models/courses.model');
const { UserModel } = require('../models/users.models');
const { VideoModel } = require('../models/video.model');

const videoRoute = express.Router();


// get all videos;
// need to make admuin user only
videoRoute.get('/', async (req,res)=>{
    try{
        console.log(req.params)
    const videos = await VideoModel.find({});
        res.status(200).json(videos)
    }catch(err){
        console.log(err);
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})

// get single video
// need to make admuin user only
videoRoute.get('/:videoID', async (req,res)=>{
    try{
    const videoID = req.params.videoID;
    const video = await VideoModel.find({_id:videoID});
    res.status(200).json({video})
    }catch(err){
        console.log(err);
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})



// add videos;
// we have use VIDEO key word in frontend for sending request;
videoRoute.post('/add/:courseId', async (req,res)=>{
    try{
        const data = req.body
        const courseId = req.params.courseId;
      const video = await  VideoModel.findOne({title:req.body.title,link:req.body.link})
     // console.log(video)
    if(!video){
         const video = new VideoModel({...data,courseId:courseId});
           video.save();
    await courseModel.findByIdAndUpdate(courseId,
            { $push: { videos: video._id } }
          );

    res.status(201).json({message:'Video Added',video})
    }else{
        res.status(400).json({error:'video already Present'})
    }
        
    
    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})



// user video list 
videoRoute.get('/courseVideos/:courseId', async(req,res)=>{
    try{
        const courseId = req.params.courseId;
        const course = await courseModel.findById({_id:courseId}).populate('videos')
        //console.log(course)
        res.status(200).json({course})
    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})  


module.exports = {videoRoute}