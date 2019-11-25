const config = require('_helpers/config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Customer = db.Customer;

module.exports = {
    submit,
    getByID,
    getAll,
    getByAttr,
    modify,
    _delete
};

async function submit(customerParam) {
    const customer = new Customer(customerParam);
    await customer.save()
}

async function getByID(id) {
    return await Customer.find({_id: id})
}

async function getAll() {
    return await Customer.find().sort({ createdDate: 'desc' }).limit(10)
}

async function getByAttr(attr) {
    return await Customer.find({[attr.field]: attr.value})
}


async function modify(id, customerParam) {
    const customer = await Customer.findById(id);
    if (!customer ) throw 'Customer not found';
    Object.assign(customer, customerParam);
    await customer.save();
}

async function _delete(attr) {
    return await Customer.find({ dbcreatedDate: { $gt: new Date('2019-10-03T13:24:00') } });
}