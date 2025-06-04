import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    invoiceDate: { type: String, required: true },
    invoiceNumber: { type: String, required: true},
    grnNumber: { type: String, required: true },
    companyName: { type: String, required: true },
    address: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    gstin: { type: String, required: true },
    shippingTocompanyName: { type: String, required: true },
    shippingTogstin: { type: String, required: true },
    shippingToAddress: { type: String, required: true },
    shippingToState: { type: String, required: true },
    packageCount: { type: String, required: true },
    perKgPrice: { type: String, required: true },
    weight: { type: String, required: true },
    freightCharges: { type: String, required: true },
    pickupCharges: { type: String, required: true },
    deliveryCharges: { type: String, required: true },
    sgstPercentage: { type: Number, required: true },
    cgstPercentage: { type: Number, required: true },
    igstPercentage: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Bill", billSchema);