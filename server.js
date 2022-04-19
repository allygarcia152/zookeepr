const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// require the data from the json file 
const { animals } = require('./data/animals.json');

//requiring express which allows us to create APIS
const express = require('express');

const PORT = process.env.PORT || 3001;

//instantiate the server
const app = express();

//middleware that instructs the server to make certain files readily available and not gate it behind a server endpoint
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//tell server to listen for requests
app.listen(PORT, () => {
  console.log(`API serve now on port 3001`);
});