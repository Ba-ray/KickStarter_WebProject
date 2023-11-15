const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
  projectname: { type: String, required: true },
  description: String,
  tags: [String],
  images: [String],
  requested_fund: Number,
  current_fund: Number,
  date_uploaded: { type: Date, default: Date.now },
  date_modified: { type: Date, default: Date.now },
  date_taken_offline: Date,
  date_deleted: Date,
  stocks_for_sale: Number,
  invited_users: [String]
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


