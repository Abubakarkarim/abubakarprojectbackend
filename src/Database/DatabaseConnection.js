const mongoose = require('mongoose');
 mongoose.connect("mongodb://localhost/fastdesire", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("Connected");
})