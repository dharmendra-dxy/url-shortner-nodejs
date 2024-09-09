const URL = require("../models/url.model");
const ShortUniqueId = require("short-unique-id");


// handleGenerateNewShortURL:
async function handleGenerateNewShortURL(req, res){

    const body = req.body;
    if(!body.url) return res.status(400).json({error : "url is required"});

    const uid = new ShortUniqueId({ length: 8 });
    const shortID = uid.rnd(); 

    await URL.create({
        shortId: shortID ,
        redirectURL: body.url ,
        visitHistory: [],
    });

    return res.json({id: shortID});
}

// handleRedirectToURL:
async function handleRedirectToURL(req, res){

    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({
        shortId
    }, {$push: 
        {visitHistory: {
            timeStamp: Date.now(),
        }} 
    });

    res.redirect(entry.redirectURL);

}

// handleGetAnalytics:
async function handleGetAnalytics(req, res){

    const shortId = req.params.shortId;
    
    const entry = await URL.findOne({shortId});
    return res.json({ 
        "total clicks": entry.visitHistory.length,
        "analytics" : entry.visitHistory,
    });
}

module.exports= {
    handleGenerateNewShortURL,
    handleRedirectToURL,
    handleGetAnalytics,
}