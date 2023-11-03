const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  team_id: { type: Number, required: true, unique: true },
  members_id: [Number],
  team_name: String,
  proj_id: [Number]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
