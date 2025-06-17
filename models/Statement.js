import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  invoiceNo: { type: String, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  paid: { type: Number, default: 0 },
  balance: { type: Number, required: true }
});

const statementSchema = new mongoose.Schema({
  statementDate: { type: String, required: true },
  statementId: { type: String, required: true, unique: true },
  accountOf: { type: String, required: true },
  invoices: [invoiceSchema],
  totalAmount: { type: Number, required: true },
  totalBalance: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Statement', statementSchema);