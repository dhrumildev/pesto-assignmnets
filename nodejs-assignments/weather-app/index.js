const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const citiesController = require('./controllers/citiesController');



// Middleware to parse JSON requests
app.use(bodyParser.json());

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});
app.use('/cities', citiesController);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
