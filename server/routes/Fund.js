const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

function isValidProjectId(projectId) {
    const ObjectId = require('mongoose').Types.ObjectId;
    return ObjectId.isValid(projectId);
}

router.post("/fundProj/:projectId", async (req, res) => {
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

        // Extract the new funding value from the request body
        const { newFundingValue } = req.body;

        // Validate the newFundingValue, assuming it's a number
        if (typeof newFundingValue !== 'number') {
            return res.status(400).json({ message: "Invalid newFundingValue format." });
        }

        // Update the current_fund field with the new value
        project.current_fund = newFundingValue;

        // Save the updated project
        const updatedProject = await project.save();

        // Send the relevant data in the response
        res.json({
            fundingGoal: updatedProject.fundingGoal,
            current_fund: updatedProject.current_fund
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
