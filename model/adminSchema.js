let mongoose = require('mongoose');//cau hinh mongoose
let adminSchema = new mongoose.Schema({
  name: String,
  pass: String,
})

module.exports = adminSchema; //truyen adminSchema