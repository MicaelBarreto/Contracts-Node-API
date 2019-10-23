const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: { type: String, required: true, unique: true, lowercase: false },
    cnpj: { type: String, required: true, select: true },
    phone: { type: String, required: true, select: true },
    address: { type: String, required: true, select: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Company', CompanySchema);