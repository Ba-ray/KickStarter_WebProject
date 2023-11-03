const mongoose = require('mongoose');

const contributorStatusSchema = new mongoose.Schema({
  user_id: Number,
  proj_id: Number,
  status: {
    type: Number,
    enum: [0, 1, 2, 3], // You can define these values as enums
    required: true,
  }
});

const ContributorStatus = mongoose.model('Contributor_Status', contributorStatusSchema);

module.exports = ContributorStatus;
