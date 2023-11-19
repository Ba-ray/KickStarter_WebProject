const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
  projectname: { type: String, required: true },
  description: String,
  projectImage : String,
  tags: [String],
  images: [String],
  projectLocation : String,
  project_end_date: Date,
  requested_fund: Number,
  current_fund: Number,
  date_taken_offline: Date, //Not needed
  date_deleted: Date,   // Currently not needed
  stocks_for_sale: Number,  // Not necessary for now
  invited_users: [String] 
}, {timestamps: true});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


