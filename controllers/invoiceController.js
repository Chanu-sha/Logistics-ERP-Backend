import Invoice from "../models/Invoice.js";

export const getNextInvoiceNumber = async (req, res) => {
  try {
    const latestInvoice = await Invoice.findOne({
      invoiceNumber: { $exists: true, $regex: /^SSL-\d{4}\/25-26$/ },
    })
      .sort({ createdAt: -1 })
      .limit(1);

    let nextNumber = 1451;

    if (latestInvoice && latestInvoice.invoiceNumber) {
      const match = latestInvoice.invoiceNumber.match(/SSL-(\d{4})\/25-26/);
      if (match && match[1]) {
        const latestNum = parseInt(match[1], 10);
        if (!isNaN(latestNum)) {
          nextNumber = latestNum + 1;
        }
      }
    }

    const nextInvoiceNumber = `SSL-${nextNumber}/25-26`;

    res.status(200).json({ nextInvoiceNumber });
  } catch (error) {
    console.error("Failed to fetch next invoice number:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createInvoice = async (req, res) => {
  try {
    const newInvoice = await Invoice.create(req.body);
    return res.status(201).json({ success: true, data: newInvoice });
  } catch (error) {
    console.error("Error creating invoice:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching invoices" });
  }
};

export const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json(invoice);
  } catch (err) {
    console.error("Error fetching invoice by ID:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateInvoice = async (req, res) => {
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json({ success: true, data: updatedInvoice });
  } catch (err) {
    console.error("Error updating invoice:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteInvoice = async (req, res) => {
  try {
    const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!deletedInvoice) {
      return res
        .status(404)
        .json({ success: false, message: "Invoice not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Invoice deleted successfully" });
  } catch (err) {
    console.error("Error deleting invoice:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
