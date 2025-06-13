import Docket from "../models/Docket.js";

export const createDocket = async (req, res) => {
  try {
    const docket = new Docket(req.body);
    const saved = await docket.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving docket:", err);
    res.status(500).json({ error: "Failed to save docket", details: err.message });
  }
};

export const getAllDockets = async (req, res) => {
  try {
    const dockets = await Docket.find().sort({ createdAt: -1 });
    res.status(200).json(dockets);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dockets" });
  }
};

export const getDocketById = async (req, res) => {
  try {
    const docket = await Docket.findById(req.params.id);
    if (!docket) return res.status(404).json({ error: "Docket not found" });
    res.status(200).json(docket);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch docket" });
  }
};

export const updateDocket = async (req, res) => {
  try {
    const updated = await Docket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update docket" });
  }
};

export const deleteDocket = async (req, res) => {
  try {
    await Docket.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete docket" });
  }
};
