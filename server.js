// Setup empty JS object to act as endpoint for all routes
projectData = {};node

// Require Express to run server and routes
// ** Express to run server and routes
const express = require('express');

// ** Start up an instance of app
const app = express();


// Start up an instance of app

/* Middleware*/
// ** Made package in code available
var bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
// **
const cors = require('cors');

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server