const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
    price: { type: String, required: true, select: true },
    payment_times: { type: Number, required: true, select: true },
    start_date: { type: Date, required: true, select: true },
    expected_date: { type: Date, required: true, select: true },    
    company_id: { type: String, required: true, select: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contract', ContractSchema);