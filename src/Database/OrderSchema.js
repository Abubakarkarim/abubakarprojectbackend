/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    CustomerID: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    DishID: [
      {
        dish: {
          required: true,
          type: mongoose.Schema.Types.ObjectId,
          ref: "Dish",
        },
      },
    ],
    Status: { type:Boolean, required: true },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
