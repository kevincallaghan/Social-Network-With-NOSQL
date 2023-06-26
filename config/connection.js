const mongoose = require('mongoose');
require('dotenv').config();

const mongoConnection = process.env.MONGODB_URI;

connect(mongoConnection);

module.exports = mongoose.connection;