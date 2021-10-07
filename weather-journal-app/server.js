// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
const cors = require('cors'); 

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
// Callback to debug
const port = 8000;
const server = app.listen(port, () => console.log('Running on port : ' + port));

// Initialize all route with a callback function
app.get('/all', getData);

// Callback function to complete GET '/all'
function getData(req, res) {
    res.send(projectData);
}

// Post Route
app.post('/all', storeData);

let entry = 0;
// Callback function to complete POST '/all'
function storeData(req, res) {
    const body = req.body;
    const data = {
        temperature: body.temperature,
        date: body.date,
        userResponse: body.userResponse
    };
    projectData[entry] = data;
    entry++;
}