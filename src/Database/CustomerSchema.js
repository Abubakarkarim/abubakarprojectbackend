/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
  name: { type: String },
  phNo: { type: Number},
  address: { type:String },
  email: {
    type: String,
    
  },
});
const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
