const express = require('express')
const router = express.Router()
const Project = require('../models/Project')
const jwt = require('jsonwebtoken')



router.post("/createproject" , async(req,res)=>{
    try{
        console.log("working?")
        const {projectname} = req.body
        const newProject = new Project({projectname})
        const saveProject = await newProject.save()
        res.status(200).json(saveProject)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})



module.exports = router