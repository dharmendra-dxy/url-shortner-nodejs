const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const {connectToMongoDB} = require("./connect");
const {restrictToLoggedUserOnly, checkAuth} = require("./middlewares/auth.middleware");

const urlRoute = require("./routes/url.routes");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user.routes");

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
app.use(cookieParser());


// routes:
app.use("/url",restrictToLoggedUserOnly,urlRoute);
app.use("/",checkAuth,staticRoute);
app.use("/user", userRoute);


app.listen(PORT, ()=> console.log(`Server is running succesfully at http://localhost:${PORT}`))