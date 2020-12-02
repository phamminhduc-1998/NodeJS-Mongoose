let mongoose = require('mongoose');//cau hinh mongoose
mongoose.connect('mongodb+srv://Phamminhduc98:1998@cluster0.mbuwn.mongodb.net/TestDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(function (conn) {
    console.log("Connect thanh cong");
})


let adminSchema = require('./model/adminSchema'); //lay data tu dung link
let Admin = mongoose.model('Admin1998', adminSchema);//(ten bang, schema)

var Admin1 = Admin({
    name: "duc1",
    pass: "1",
});

Admin1.save(function(err){
    if(err) throw err;
    console.log("OK SAVE");
})



















