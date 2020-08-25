/** @format */
require("dotenv").config();
require("./Database/DatabaseConnection");

const express = require("express");
const cors = require('cors')
const app = express();
const Dish = require("./Database/DishSchema");
const adminRoutes = require('./routes/adminRoutes')

const Customer = require("./Database/CustomerSchema");
const orderRoutes = require("./routes/orderRoutes")

app.use(express.json())
app.use(cors())
app.use(orderRoutes)
app.use(adminRoutes)

app.get("/", function (req, res) {
  res.send("FOODIE");
});


app.post("/dish", async function (req, res) {
  // try {
  //   const newDish = new Dish(req.body);
  //   await newDish.save();
  //   res.send(newDish)
  // } catch (error) {
  //   res.status(400).send(error.message);
  // }

   let dish = new Dish();
   dish.name = req.body.name;
   dish.price = req.body.price;
   dish.description = req.body.desc;
   dish.page = req.body.page;

  await dish.save();
  
  console.log("posted");


});
app.post("/order", async function (req, res) {
  // try {
  //   const newDish = new Dish(req.body);
  //   await newDish.save();
  //   res.send(newDish)
  // } catch (error) {
  //   res.status(400).send(error.message);
  // }

   let dish = new Dish();
   dish.name = req.body.name;
   dish.price = req.body.price;
   dish.description = req.body.desc;
   dish.page = req.body.page;

  await dish.save();
  
  console.log("posted");


});
app.get("/dish", async function (req, res) {
 try {
   let data = await Dish.find()
   res.send(data)
 } catch (error) {
  res.status(400).send(error.message);
 }
});

app.delete("/dish", async function (req, res) {
  try {
    // res.send(req.body.name)
   let data = await Dish.remove(req.body)
   res.send(data)
  } catch (error) {
    res.status(400).send(error.message)
  }
});
app.delete("/dish/:id", async function (req, res) {

    console.log("in");
    let id = req.params.id;
    // res.send(req.body.name)
    await Dish.findByIdAndDelete(id)
return res.send("deleted")
   //await Dish.save()
   
 
});
app.post("/customer", async (req, res) => {
  console.log("in");
    let customer = await new Customer();
    customer.name=req.body.name
    customer.phNo=req.body.price
    customer.address=req.body.page
    customer.email=req.body.page
  
    await customer.save();
  
    res.send("heheh");
    
  });
app.get("/customer/data", async (req, res) => {
  console.log("in");
    let customer = await Customer.find();
   
  
    res.send(customer);
    
  });
app.patch("/dish/:id",async function (req, res) {
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


// //// ====================  UPDATING User
// router.patch("/user/:id", async (req, res) => {
//   const update = Object.keys({name:"pizza",price:"555"});
//   [name]
//   try {
//     const data = await user.findById(req.params.id);
//     if (!data) {
//       return res.status(404).send();
//     }
//     update.forEach((single) => {
//       data[single] = req.body[single];
//     });
//     await data.save();
//     res.send(data);
//   } catch (error) {
//     console.log("The error");
//     res.status(400).send(error.message);
//   }
// });





app.get("/customer",async function (req, res) {
  try {
    let data = await Customer.find()
    res.send(data)
  } catch (error) {
   res.status(400).send(error.message);
  }
});
app.post("/customer", async function (req, res) {
  try {
    const tempdata = findOne({phNo:req.body.phNo})

    if(!tempdata){
      res.send(tempdata)
    }
    const newCust = new Customer(req.body);
    await newCust.save();
    res.send(newCust);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log("SERVER is Up and Running On port " + port);
});