const User = require("../models/user.model");
const { setUser } = require("../service/auth.service");


// handleUserSignup:
async function handleUserSignup(req,res) {
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password, 
    });
    return res.redirect("/");
}

// handleUserLogin:
async function handleUserLogin(req,res) {
    const {email, password} = req.body;

    const user = await User.findOne({email, password});

    if(!user) return res.render("login", {
        error: "Invalid useremail or password"
    })

    const token = setUser(user);
    res.cookie("uid", token);

    return res.redirect("/");
}


module.exports = {
    handleUserSignup,
    handleUserLogin,
}