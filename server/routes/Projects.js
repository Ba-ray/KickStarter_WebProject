const express = require('express')
const router = express.Router()
const Project = require('../models/Project')
const jwt = require('jsonwebtoken')



router.post("/createproject" , async(req,res)=>{
    try{
        const {projectname} = req.body

        if (!projectname || projectname.trim().length < 3) {
            return res.status(400).json({ message: "Project Name must be at least 3 characters." });
        }

        const existingProject = await Project.findOne({ projectname });
        if (existingProject) {
            return res.status(400).json({ message: "Project Name already exists." });
        }

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