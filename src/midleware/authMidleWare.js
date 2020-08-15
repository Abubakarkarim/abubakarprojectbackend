module.exports=async (req, res, next) => {
  try {
    const userToken = req.header("Authorization").replace("Bearer ", "");
    var decoded = await jwt.verify(userToken, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(400).send({ message: "WRONG TOKEN" });
  }
}