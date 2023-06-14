const express  = require('express');
const courseModel = require('../models/courses.model');

const videoRoute = express.Router();


// get all videos;

videoRoute.get('/', async (req,res)=>{
    try{
    const course = await courseModel.find({});
    let videos = [];
     course.forEach((user)=>{
         videos.push(...user.videos)
    })
    if(!course){
        res.status(404).json({message:"Videos not found"})
    }else{
        res.status(202).json({message:"videos", videos})
    }
    }catch(err){
        console.log(err);
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})

// get single video

videoRoute.get('/:videoID', async (req,res)=>{

    try{
    const videoID = req.params.videoID;
    const course = await courseModel.find({});
    let video = [];
     course.forEach((user)=>{
          for(let i=0; i<user.videos.length; i++){
                if(user.videos[i]._id==videoID){
                    video.push(user.videos[i])
                }
          }
    })
    if(!course){
        res.status(404).json({message:"Videos not found"})
    }else{
        res.status(202).json({message:"video", video})
    }
    }catch(err){
        console.log(err);
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})



// add videos;
// we have use VIDEO key word in frontend for sending request;
videoRoute.put('/add/:courseID', async (req,res)=>{
    try{
        const courseID = req.params.courseID;
    const [course] = await courseModel.find({_id:courseID});
    //console.log(course)
    let videos = course.videos;
        videos.push(req.body);
   // console.log(course.videos,req.body)
    if(!course){
        res.status(404).json({message:"course not found"})
    }else{
        await courseModel.findByIdAndUpdate({_id:courseID},{videos})
        res.status(202).json({message:"video added", videos})
    }
    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})


// delete videos;

// videoRoute.delete('/delete/:courseID', async (req,res)=>{

//     try{
//     const courseID = req.params.courseID;
//     const course = await courseModel.find({_id:courseID});
//     if(!course){
//         res.status(404).json({message:"Video not found"})
//     }else{
//         let videos = course.videos;
            
//         //await courseModel.findByIdAndUpdate({_id:courseID},{video})
//         res.status(202).json({message:"video updated",})
//     }
//     }catch(err){
//         console.log(err);
//         res.status(400).json({message:'Something Went Wrong',error:err.message})
//     }
// })


module.exports = {videoRoute}