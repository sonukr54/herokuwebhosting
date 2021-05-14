const expres = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB=require("./server/database/connection")

const app = expres();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse request to bodyparser

app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views/foldername"))// if u put ejs file in foldername folder

//load assets using middleware method --virtual path
app.use("/css", expres.static(path.resolve(__dirname, "assets/css")));
//suppose u need to access style.css file which is inside css folder then u need to specify only css/style.css not the whole path
app.use("img/", expres.static(path.resolve(__dirname, "assets/img")));
app.use("/js", expres.static(path.resolve(__dirname, "assets/js")));

//load routers

app.use("/",require("./server/routes/router"))

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});


