const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/President" ,{

}).then(() =>{
    console.log("Connection is successful");
}).catch(err =>{
    console.log("No Connection");
})