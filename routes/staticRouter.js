const express = require("express");

const router = express.Router();

// routes:

router.get("/", (req,res) => {
    return res.render("home")
});

module.exports = router;