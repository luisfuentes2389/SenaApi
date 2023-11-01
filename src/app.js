const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const usersRoutes = require("./routes/users");

//connet tha batabase
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://127.0.0.1:27017/SENAAPi4")
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));

//settings

app.set("port", process.env.PORT || 3000);

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

//Routes

app.use("/users", usersRoutes);

// star the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
