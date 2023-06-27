const connection = require('../config/connection');
const { usersSeeds, thoughtsSeeds } = require('./data.js');
const { Users, Thoughts } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  
  await Users.deleteMany({});
  
  await Thoughts.deleteMany({});

  
  await Users.insertMany(usersSeeds);
  
  await Thoughts.insertMany(thoughtsSeeds);

  console.table(Users);
  console.table(Thoughts);
  console.info('You have successfully seeded the database');
  process.exit(0);
});