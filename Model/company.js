const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: { type: String, required: true, lowercase: false, select: true },
    cnpj: { type: String, required: true, select: true, unique: true },
    phone: { type: String, required: true, select: true },
    address: { type: String, required: true, select: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Company', CompanySchema);