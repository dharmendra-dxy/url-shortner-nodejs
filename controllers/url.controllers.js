const URL = require("../models/url.model");



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


module.exports= {
    handleGenerateNewShortURL,
}