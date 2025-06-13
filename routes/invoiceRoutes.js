import express from "express";
import { createInvoice, deleteInvoice, getAllInvoices, getInvoiceById, updateInvoice } from "../controllers/invoiceController.js";

const router = express.Router();

router.post("/", createInvoice);
router.get("/", getAllInvoices);
router.get("/:id", getInvoiceById);     
router.put("/:id", updateInvoice); 
router.delete("/:id", deleteInvoice);

export default router;
