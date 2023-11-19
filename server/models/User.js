const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  age_range: String,
  aboutme: String,
  enterprise_name: String,
  profile_image: String,
  linkedin_link: String,
  date_joined: { type: Date , default: Date.now},
  date_deleted: Date,
  job_title: String,
  authorization: Boolean,
  availability: Boolean,
  projects: [Number],
  team_id: [Number],
  transactions: [Number],
  interesting_tags: [String],
  sub_id: Number,
  token: String,
  field_id: [String]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
