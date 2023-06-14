const express  = require('express');
const courseModel = require('../models/courses.model');


const courseRoute = express.Router();

// all course get request 
courseRoute.get('/', async(req,res)=>{
    try{
    let {q,sortBy,sortOrder,page,limit} = req.query;
    let filter = {};
    if(q){
       filter.title = {$regex: q, $options: 'i'}
    }

    const sort = {};
    if(sortBy){
        sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
    }

    page  = page ? page : 1;

    limit = limit ? limit : 10;

    console.log(filter,sort)
    const data = req.body;
    const course = await courseModel.find(filter).sort(sort).skip((page-1)*limit).limit(limit);
    res.status(200).json({course})

    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})



// indivual course
courseRoute.get('/:courseID', async(req,res)=>{

    try{
        const courseID = req.params.courseID;
        //console.log(courseID)
        const course = await courseModel.find({_id:courseID})
        res.status(200).json({course})
    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})



// course post course
courseRoute.post('/add', async(req,res)=>{

    try{
    const {title,teacher} = req.body;
    const course = await courseModel.find({title,teacher})
    //console.log(course)
    if(course.length){
        res.status(403).json({message:'Course Already Present'})
    }else{
        const newCourse = new courseModel(req.body);
        await newCourse.save()
        res.status(201).json({message:'Course Added',data:newCourse})
    }
    
    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})


// course update request;
courseRoute.patch('/update/:courseID', async (req,res)=>{

    try{
        const courseID = req.params.courseID;
    const course = await courseModel.findByIdAndUpdate({_id:courseID},req.body);
    console.log(course)
    if(!course){
        res.status(404).json({message:"course not found"})
    }else{
        res.status(202).json({message:"course updated", course})
    }

    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})


// course delete request;
courseRoute.delete('/delete/:courseID', async (req,res)=>{

    try{
        const courseID = req.params.courseID;
    const course = await courseModel.findByIdAndDelete({_id:courseID});
    console.log(course)
    if(!course){
        res.status(404).json({message:"course not found"})
    }else{
        res.status(200).json({message:"course deleted", course})
    }
    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})






module.exports = {courseRoute}