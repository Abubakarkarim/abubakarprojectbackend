/** @format */

const express = require("express");
const router = express.Router();
const AdminAuth = require("../midleware/authMidleWare");
const Admin = require("../Database/AdminSchema");
var jwt = require("jsonwebtoken");
router.post("/admin-login", async function (req, res) {
  try {
    console.log(req.body);
    let data = await Admin.findOne({ phoNo: req.body.phoNo });

    if (!data) {
      res.satus(404).send({ message: "user not found!" });
    }
    console.log("one");
    if (data.password !== req.body.password) {
      res.satus(404).send({ message: "password not matched!" });
    }
    var token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET);
    console.log(token, data);
    res.send({ token, data });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.post("/emp", AdminAuth, async (req, res) => {
  try {
    console.log(req.body);
    const data = Admin(req.body);
    await data.save();
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
