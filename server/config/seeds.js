const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');

   await User.create({
  firstName: 'Admin',
  lastName: 'Owner',
  email: 'admin@ralphs.com',
  password: 'adminpassword',
  isAdmin: true,
});

  console.log('users seeded');

  process.exit();
});
