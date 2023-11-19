const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
  projectTitle: { type: String, required: true },
  projectDescription: String,
  projectImage : String,
  projectCategory: [String],
  images: [String],
  projectLocation : String,
  projectEndDate: Date,
  fundingGoal: Number,
  current_fund: Number,
  date_taken_offline: Date, //Not needed
  date_deleted: Date,   // Currently not needed
  stocks_for_sale: Number,  // Not necessary for now
  invited_users: [String],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {timestamps: true});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


