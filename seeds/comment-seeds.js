const { Comment } = require('../models');

const commentData = [
  {
    message: 'good luck!',
    user_id: 2,
    post_id: 1
  },
  {
    message: "you'll need it...",
    user_id: 4,
    post_id: 1
  },
  {
    message: 'let me know if you need any help!',
    user_id: 3,
    post_id: 1
  },
  {
    message: 'test',
    user_id: 1,
    post_id: 2
  },
  {
    message: 'haha!',
    user_id: 2,
    post_id: 3
  },
  {
    message: '...',
    user_id: 4,
    post_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;