const express = require("express");

const {
    handleGenerateNewShortURL,
} = require("../controllers/url.controllers");

const router = express.Router();


// routes:

router.post("/",handleGenerateNewShortURL)


module.exports = router;