import Bill from "../models/Bill.js";

export const createBill = async (req, res) => {
  try {
    const billData = req.body;
    const newBill = await Bill.create(billData);
    return res.status(201).json({
      success: true,
      data: newBill,
    });
  } catch (error) {
    console.error("Error in createBill:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error: Unable to save bill.",
    });
  }
};

export const getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find().sort({ createdAt: -1 });
    return res.status(200).json(bills);
  } catch (error) {
    console.error("Error fetching bills:", error);
    return res.status(500).json({ message: "Server error fetching bills" });
  }
};

export const getBillById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json(bill);
  } catch (error) {
    console.error("Error fetching bill:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateBill = async (req, res) => {
  try {
    const updatedBill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    res.status(200).json(updatedBill);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteBill = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBill = await Bill.findByIdAndDelete(id);

    if (!deletedBill) {
      return res.status(404).json({
        success: false,
        message: "Bill not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Bill deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting bill:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error: Unable to delete bill.",
    });
  }
};


