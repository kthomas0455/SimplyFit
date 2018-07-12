const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// set up logger
app.use(logger("dev"));
// serve up static assets

app.use(express.static("client/build"));

// set up routes
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    "mongodb://heroku_9tn1sb2j:no3vq295886njsr1t4balt7eu6@ds133621.mlab.com:33621/heroku_9tn1sb2j"
);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
