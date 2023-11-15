const express = require('express');
const uploadMiddleware = require('../middlewares/MulterMiddleware');
const User = require('../models/User');
const router = express.Router();



router.post("/edituserimage/:userId", uploadMiddleware.single("photo"), (req, res) => {
    const userId = req.params.userId;
    const newProfileImage = req.file.filename;

    User.findByIdAndUpdate(userId, { profile_image: newProfileImage }, { new: true })
        .then((updatedUser) => {
            if (!updatedUser) {
                return res.status(404).send("User not found");
            }
            res.send(updatedUser);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error updating user image");
        });
});



module.exports = router;