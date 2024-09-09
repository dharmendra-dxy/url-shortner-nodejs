const mongoose = require("mongoose");


async function connectToMongoDB(url){
    return mongoose
        .connect(url)
        .then(()=> console.log("Mongoose databse connected succesfully"))
        .catch((e)=> console.log("error: ", e));
}

module.exports = {
    connectToMongoDB,
};