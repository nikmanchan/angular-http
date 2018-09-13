// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

// spin up server
app.listen( PORT, ()=>{
    console.log( 'server up on:', PORT );
}) // end server up

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

// serve back static files
app.use(express.static('server/public'));

