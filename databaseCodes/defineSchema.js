const mongoose = require('mongoose');

mongoose
.connect("mongodb://127.0.0.1:27017/projectDBMS")
.then(function(){
    console.log("Mongo Successfully Connected !");
})
.catch(function(err){console.log("Mongo error!",err)});

// Define schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique ! 
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);   // this is the user object to do stuff....

// Export the model
module.exports = User;