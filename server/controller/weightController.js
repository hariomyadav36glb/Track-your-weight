// controller/weightController.js

import Weight from "../model/weight.js";

// ✅ Add Weight
export const addWeight = async (req, res) => {
  try {
    const { weight, date } = req.body;

    if (!weight) {
      return res.status(400).json({ error: "Weight is required" });
    }

    const newEntry = await Weight.create({
      user: req.user._id,
      weight,
      date: date ? new Date(date) : new Date(), // safely convert date
    });

    res.status(201).json({ message: "Weight added", data: newEntry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving weight" });
  }
};

// ✅ Get Weight between dates
export const getWeight = async (req, res) => {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res.status(400).json({ error: "Start and end dates are required" });
  }

  try {
    const data = await Weight.find({
      user: req.user._id,
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    }).sort('date');

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching data" });
  }
};
