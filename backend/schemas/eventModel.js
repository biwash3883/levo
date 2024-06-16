const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date },
  description: { type: String },
  participants: { type: String },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
