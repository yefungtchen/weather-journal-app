// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
// ** Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
// ** Made package in code available
var bodyParser = require("body-parser");

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
// CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require("cors");

// Here we are configuring express to use cors
app.use(cors());

// Initialize the main project folder
// This line of code connects our server-side code (the code in the server.js file) to our client-side code (the browser code written in the files housed in the website folder).
app.use(express.static("website"));

// Setting up the Get Route
// respond with "hello world" when a GET request is made to the homepage
app.get("/allData", function (req, res) {
  res.send(JSON.stringify(projectData));
  res.send("Hello world");
  console.log(projectData);
});

// Setting up the Post Route
app.post("/", function (req, res) {
  projectData.temp = req.body.temp;
  projectData.userEntry = req.body.userEntry;
  projectData.date = req.body.date;
  console.log(req.body);
  res.send("POST received, ok ok ok");
  res.end();
});

// Setup Server
const port = 8000;

const server = app.listen(port, listening);

// Server Callback
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}
