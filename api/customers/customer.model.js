const mongoose = require('mongoose');
const refGen = require('_helpers/refGen')
const Schema = mongoose.Schema;


const schema = new Schema({
    ref: { type: Number, unique: true, required: true, default: refGen },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    street: { type: String, required: true },
    postCode: { type: String, required: true },
    city: { type: String, required: true },
    createdDate: { type: Date, required: true, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Customer', schema);