// DEPENDENCIES
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
require('pretty-error').start();

// CONFIG
const PORT = process.env.PORT || 2080;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/wrestlers'

// DB
mongoose.connect(mongoURI, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', (err) => console.log('Mongo error: ', err));
db.on('connected', () => console.log('Mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('Mongo disconnected'));
mongoose.Promise = global.Promise;

// CONTROLLERS
const wrestlersController = require('./controllers/wrestlers');

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(session({
    secret: 'WUBALUBADUBDUB',
    resave: true,
    saveUninitialized: false,
    maxAge: 2592000000
}));
app.use('/wrestlers', wrestlersController);



// LISTEN
app.listen(PORT, () => console.log('BOOKS API running on port: ', PORT));
