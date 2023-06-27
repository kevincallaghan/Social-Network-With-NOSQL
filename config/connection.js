const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
process.env.MONGODB_URI
)

// const mongoConnection = process.env.MONGODB_URI;

// mongoose.connect(mongoConnection);

module.exports = mongoose.connection;