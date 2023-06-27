const mongoose = require('mongoose');
require('dotenv').config();

// const mongoConnection = process.env.MONGODB_URI;
const mongoConnection = 'mongodb+srv://kevinc:qwe123@classactivities.znc6agm.mongodb.net/noSQLsocialMEDIA'

mongoose.connect(mongoConnection);

module.exports = mongoose.connection;