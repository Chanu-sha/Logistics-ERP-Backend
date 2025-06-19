import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    companyName: String,
    address: String,
    invoiceDate: String,
    invoiceNumber: String,
    grnNumber: String,
    shippingTocompanyName: String,
    shippingToAddress: String,
    packageCount: String,
    weight: String,
    chargeableWeight: String,
    perKgPrice: String,
    freightCharges: String,
    pickupCharges: String,
    deliveryCharges: String,
    otherExpenses: String,
    from: String, 
    to: String,
    igstPercentage: Number,
    cgstPercentage: Number,
    sgstPercentage: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Invoice", invoiceSchema);
