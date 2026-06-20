const mongoose = require("mongoose");

const courseSchema =
new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },

  students: {
    type: Number,
    required: true
  }

},
{
  timestamps: true
});

module.exports =
mongoose.model(
  "Course",
  courseSchema
);
