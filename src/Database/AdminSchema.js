/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmpSchema = new Schema({
 
  
  phoNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});
const Admin = mongoose.model("Admin", EmpSchema);


module.exports = Admin;
