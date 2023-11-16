const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
  projectname: { type: String, required: true },
  description: String,
  tags: [String],
  images: [String],
  requested_fund: Number,
  current_fund: Number,
  date_taken_offline: Date,
  date_deleted: Date,
  stocks_for_sale: Number,
  invited_users: [String]
}, {timestamps: true});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


