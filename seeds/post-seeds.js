const { Post } = require('../models');

const postData = [
  {
    title: 'My Very First Post',
    body: 'I am learning how to become a developer',
    user_id: 1
  },
  {
    title: 'My Second Post',
    body: 'This is my second post',
    user_id: 1
  },
  {
    title: 'Developer: Acquired',
    body: 'I know how to develop with handlebars and bootstrap!',
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;