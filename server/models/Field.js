const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  field_id: { type: Number, required: true, unique: true },
  category: Number,
  enterprise_name: String,
  start_date: Date,
  end_date: Date,
  title: String,
  responsibilities: [String]
});

const Field = mongoose.model('Field', fieldSchema);

module.exports = Field;
