const express = require('express')
const router = express.Router()
const Order=require ("../Database/OrderSchema");
const Dish = require("../Database/DishSchema");
const Customer = require("../Database/CustomerSchema");

router.get("/order",async function (req, res) {
  try {
    let data = await Order.find()
    res.send(data)
  } catch (error) {
   res.status(400).send(error.message);
  }
});
router.delete("/order", async function (req, res) {
  try {
    // res.send(req.body.name)
   let data = await Order.remove(req.body)
   res.send(data)
  } catch (error) {
    res.status(400).send(error.message)
  }
});
router.post("/order", async function (req, res) {
  console.log("In order");
  console.log(req.body.name);


  let dish = new Dish();
  dish.name = req.body.name;
  dish.price = req.body.price;
  dish.description = req.body.desc;
  dish.page = req.body.page;

 await dish.save();
  // try {
  //   const newOrder = new Order(req.body);
  //   await newOrder.save();
  //   res.send(newOrder);
  // } catch (error) {
  //   res.status(400).send(error.message);
  // }
  
});
router.patch("/order/:id",async function (req, res) {
  const update = Object.keys(req.body);
  
  try {
    const data = await Dish.findById(req.params.id);
    if (!data) {
      return res.status(404).send();
    }
    update.forEach((single) => {
      data[single] = req.body[single];
    });
    await data.save();
    res.send(data);
  } catch (error) {
    console.log("The error");
    res.status(400).send(error.message);
  }
});


module.exports = router;