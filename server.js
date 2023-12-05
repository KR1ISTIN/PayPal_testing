
const express = require('express'); // importing express
require('dotenv').config();

const app = express(); // Initialize an instance of Express.js
const PORT = process.env.PORT || 3001; // Specify on which port the Express.js server will run

// Create Express.js routes for default '/',  endpoints
// first arg is the route, and 2nd arg is the cb function to handle areq and handle the res
app.get('/', (req, res) => res.send('This is the main page'));
app.get('/test', (req, res) => res.send('This is the test page'));

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


