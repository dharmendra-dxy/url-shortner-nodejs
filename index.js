const express = require("express");
const path = require("path");

const {connectToMongoDB} = require("./connect");
const urlRoute = require("./routes/url.routes");
const staticRoute = require("./routes/staticRouter");
const URL = require("./models/url.model");

const app = express();
const PORT = 8000;

// ejs setup:
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


// database connection:
connectToMongoDB("mongodb://localhost:27017/url-shortner");


// middlewares:
app.use(express.json()) // -> parses json requests.
app.use(express.urlencoded({extended: false})); // -> parses forms data request.


// routes:
app.use("/url",urlRoute);
app.use("/", staticRoute);


app.listen(PORT, ()=> console.log(`Server is running succesfully at http://localhost:${PORT}`))