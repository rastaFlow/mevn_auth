const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require ("path");
const cors = require("cors");
const passport = require("passport");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
require("./config/passport")(passport)


const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database Connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

const users = require("./router/api/users");
app.use("/api/users", users);

app.get("*", (req,res) =>{
  res.sendFile(path.join(__dirname, "public/index.html"));
})

const PORT  = process.env.PORT || 4250

app.listen(PORT, (req, res) =>{
  console.log(`server working on port ${PORT}`);
})
