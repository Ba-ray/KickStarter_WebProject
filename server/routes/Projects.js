const express = require('express')
const router = express.Router()
const Project = require('../models/Project')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const uploadMiddleware = require('../middlewares/MulterMiddleware');
const mongoose = require('mongoose'); //in order to change creator to ObjectId type




router.post("/createproject", uploadMiddleware.single("projectImage"), async (req, res) => {
    try {

        const newProfileImage = req.file.filename;
        console.log(newProfileImage);
        // Check if req.file exists before accessing its properties
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded." });
        }
        // Extract other project details from req.body
        const { projectTitle, projectDescription, projectCategory, fundingGoal, projectDuration , creator} = req.body;

        const user = await User.findById(creator);

        if(!user){
            return res.status(400).json({ message: "User does not exist" });
        }

        if (!projectTitle || projectTitle.trim().length < 3) {
            return res.status(400).json({ message: "Project Name must be at least 3 characters." });
        }

        if (!projectDescription){
            return res.status(400).json({ message: "Description Required." });
        }

        // Check description length
        if (projectDescription && projectDescription.length > 500) {
            return res.status(400).json({ message: "Project Description exceeds the maximum length of 500 characters." });
        }

        if (!fundingGoal || fundingGoal < 0){
            return res.status(400).json({ message: "Requested Fund invalid." });
        }

        const existingProject = await Project.findOne({ projectTitle });
        if (existingProject) {
            return res.status(400).json({ message: "Project Name already exists." });
        }
        
        if (!projectDuration || projectDuration < 0){
            return res.status(400).json({ message: "Project Duration Invalid" });
        }

        const startDate = new Date();
        const durationInDays = parseInt(projectDuration); 
        const endDate = new Date(startDate.getTime() + durationInDays * 24 * 60 * 60 * 1000);

        console.log(req.file)

        const newProject = new Project({
            projectTitle,
            projectDescription,
            projectCategory: projectCategory.split(",").map(tag => tag.trim()),
            current_fund:0,
            fundingGoal,
            projectEndDate: endDate,
            projectImage: req.file.filename,
            creator
        });

        const saveProject = await newProject.save();
        res.status(200).json(saveProject);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



router.post("/projectPagination", async (req, res) => {
    try {
        const { page = 1, limit = 9, search = '', timeFilter = 'thisYear', tags = '' } = req.body;

        const query = {};

        if (search) {
            query.projectTitle = { $regex: new RegExp(search, 'i') };
        }

        if (tags) {
            query.projectCategory = { $regex: new RegExp(tags.split(",").join("|"), "i") };
        }


        if (timeFilter === 'today') {
            const startOfToday = new Date();
            startOfToday.setHours(0, 0, 0, 0);
            const endOfToday = new Date();
            endOfToday.setHours(23, 59, 59, 999);
            query.createdAt = { $gte: startOfToday, $lte: endOfToday };
        } else if (timeFilter === 'this-week') {
            const startOfWeek = new Date();
            startOfWeek.setHours(0, 0, 0, 0);
            startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
            const endOfWeek = new Date();
            endOfWeek.setHours(23, 59, 59, 999);
            endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));
            query.createdAt = { $gte: startOfWeek, $lte: endOfWeek };
        } else if (timeFilter === 'this-month') {
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
        console.log("Tags:", tags);
        console.log("Time Filter:", timeFilter);
        console.log("Constructed Query:", query);

        const projects = await Project.find(query)
            .populate({
                path: 'creator',
                select: 'username' // Specify the fields to include, in this case, only the username
            })
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));


        const totalCount = await Project.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);

        res.json({
            totalPages,
            projects
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});







function isValidProjectId(projectId) {
    const ObjectId = require('mongoose').Types.ObjectId;
    return ObjectId.isValid(projectId);
}

router.get("/GetProjectByID/:projectId", async (req, res) => {
    try {
        const projectId = req.params.projectId;

        // Check if projectId is valid
        if (!isValidProjectId(projectId)) {
            return res.status(400).json({ message: "Invalid Project ID format." });
        }

        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({ message: "Project not found." });
        }

        res.json(project);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router

