const express = require("express");

const {connectToMongoDB} = require("./connect");
const urlRoute = require("./routes/url.routes");

const app = express();
const PORT = 8000;


// database connection:
connectToMongoDB("mongodb://localhost:27017/url-shortner");


// middlewares:
app.use(express.urlencoded({extended: false}));


// routes:
app.use("/url",urlRoute);


app.listen(PORT, ()=> console.log(`Server is running succesfully at http://localhost:${PORT}`))