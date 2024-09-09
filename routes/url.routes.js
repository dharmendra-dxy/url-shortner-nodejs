const express = require("express");

const {
    handleGenerateNewShortURL,
    handleRedirectToURL,
} = require("../controllers/url.controllers");

const router = express.Router();


// routes:

router.post("/",handleGenerateNewShortURL)
router.get("/:shortId", handleRedirectToURL)

module.exports = router;