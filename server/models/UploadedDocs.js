const mongoose = require('mongoose');


const uploadSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },

},{timestamps: true}
);

const UploadModel = mongoose.model('Upload', uploadSchema);

module.exports = UploadModel;
