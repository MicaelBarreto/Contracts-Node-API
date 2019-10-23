const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    value: { type: Number, required: true, select: true },
    date: { type: Date, required: true, select: true },
    contract_id: { type: Date, required: true, select: true },    
    company_id: { type: String, required: true, select: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);