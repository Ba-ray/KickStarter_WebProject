const express = require('express');
const uploadMiddleware = require('../middlewares/MulterMiddleware');
const User = require('../models/User');
const router = express.Router();
const path = require('path');
const fs = require('fs');



router.post("/edituserimage/:userId", uploadMiddleware.single("photo"), async (req, res) => {
    const userId = req.params.userId;
    const newProfileImage = req.file.filename;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }

        if (user.profile_image) {
            const oldImagePath = path.join(__dirname, '../public/uploads/', user.profile_image);
            fs.unlinkSync(oldImagePath);
        }

        const updatedUser = await User.findByIdAndUpdate(userId, { profile_image: newProfileImage }, { new: true });

        res.send(updatedUser);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error updating user image");
    }
});



module.exports = router;