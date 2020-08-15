/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
  name: { type: String, required: true },
  phNo: { type: Number, required: true, unique: true },
  address: { type:String, required: true },
  email: {
    type: String,
    unique: true,
  },
});
const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
