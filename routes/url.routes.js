const express = require("express");

const {
    handleGenerateNewShortURL,
    handleRedirectToURL,
    handleGetAnalytics,
} = require("../controllers/url.controllers");

const router = express.Router();


// routes:

router.post("/",handleGenerateNewShortURL)
router.get("/:shortId", handleRedirectToURL)
router.get("/analytics/:shortId",handleGetAnalytics)

module.exports = router;