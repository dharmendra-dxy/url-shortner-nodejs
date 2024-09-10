const mongoose = require("mongoose");

// user schema:
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }

}, {timestamps: true});


// userModel:
const User = mongoose.model("user", userSchema);


module.exports = User;