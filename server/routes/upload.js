const express = require('express');
const uploadMiddleware = require('../middlewares/MulterMiddleware');
const UploadModel = require('../models/UploadedDocs');
const router = express.Router()


router.post("/save" , uploadMiddleware.single("photo") , (req , res) => {
    const photo = req.file.filename;

    UploadModel.create({photo})
    .then((data) => {
        console.log("Uploaded Successfully");
        console.log(data)
        res.send(data);
    })
    .catch((err) => console.log(err));
});



router.get("/get/:photoName", (req, res) => {
    const photoName = req.params.photoName;
    const baseURL = "http://localhost:8080";

    UploadModel.findOne({ photo: photoName })
        .then((document) => {
            if (!document) {
                return res.status(404).send("Document not found");
            }
            const photoURL = `${baseURL}/uploads/${document.photo}`;
            res.send({ photoURL });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error retrieving document");
        });
});



module.exports = router;