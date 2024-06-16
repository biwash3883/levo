const Event = require("../schemas/eventModel");

const createEvents = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    console.error(error);
  }
};

const getEvents = async (req, res) => {
  try {
    const event = await Event.find({});
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event found successfully", event });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createEvents, getEvents };
