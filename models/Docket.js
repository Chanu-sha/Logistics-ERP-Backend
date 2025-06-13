import mongoose from "mongoose";

const docketSchema = new mongoose.Schema({
  companyName: String,
  gstin: String,
  address: String,
  invoiceDate: String,
  invoiceNumber: String,
  grnNumber: String,
  from: String,
  to: String,
  packageCount: String,
  transportMode: String,
  weight: String,
  chargeableWeight: String,
  perKgPrice: String,
  freightCharges: String,
  pickupCharges: String,
  deliveryCharges: String,
  paymentStatus: String,
  otherExpenses: String,
  saidToContain: String,
  consignerName: String,
  consignerAddress: String,
  consigneeName: String,
  consigneeAddress: String,
  igstPercentage: Number,
  cgstPercentage: Number,
  sgstPercentage: Number,
}, {
  timestamps: true,
});

export default mongoose.model("Docket", docketSchema);
