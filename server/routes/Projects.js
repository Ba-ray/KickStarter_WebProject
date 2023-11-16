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



router.post("/projectPagination", async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '', timeFilter = 'thisYear' } = req.body;

        const query = {};

        if (search) {
            query.projectname = { $regex: new RegExp(search, 'i') };
        }

        if (timeFilter === 'today') {
            const startOfToday = new Date();
            startOfToday.setHours(0, 0, 0, 0);
            const endOfToday = new Date();
            endOfToday.setHours(23, 59, 59, 999);
            query.createdAt = { $gte: startOfToday, $lte: endOfToday };
        } else if (timeFilter === 'thisWeek') {
            const startOfWeek = new Date();
            startOfWeek.setHours(0, 0, 0, 0);
            startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
            const endOfWeek = new Date();
            endOfWeek.setHours(23, 59, 59, 999);
            endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));
            query.createdAt = { $gte: startOfWeek, $lte: endOfWeek };
        } else if (timeFilter === 'thisMonth') {
            const startOfMonth = new Date();
            startOfMonth.setHours(0, 0, 0, 0);
            startOfMonth.setDate(1);
            const endOfMonth = new Date();
            endOfMonth.setHours(23, 59, 59, 999);
            endOfMonth.setMonth(endOfMonth.getMonth() + 1);
            endOfMonth.setDate(0);
            query.createdAt = { $gte: startOfMonth, $lte: endOfMonth };
        } else if (timeFilter === 'thisYear') {
            const startOfYear = new Date();
            startOfYear.setHours(0, 0, 0, 0);
            startOfYear.setMonth(0, 1);
            const endOfYear = new Date();
            endOfYear.setHours(23, 59, 59, 999);
            endOfYear.setMonth(11, 31);
            query.createdAt = { $gte: startOfYear, $lte: endOfYear };
        }

        console.log("Search Term:", search);
        console.log("Time Filter:", timeFilter);
        console.log("Constructed Query:", query);

        const projects = await Project.find(query)
            .sort({createdAt: -1}) 
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});




module.exports = router