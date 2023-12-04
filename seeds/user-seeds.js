const { User } = require('../models');

const userData = [
  {
    username: 'cbishop1',
    password: '123456',
  },
  {
    username: 'connorbishop',
    password: 'abcd',
  },
  {
    username: 'bishopconnor',
    password: '987654321',
  },
  {
    username: 'anonymous',
    password: 'aaaaa',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;