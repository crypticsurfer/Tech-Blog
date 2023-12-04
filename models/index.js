// import models
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Posts belongsTo Users
Post.belongsTo(User);

// Users hasMany Posts
User.hasMany(Post);

// Comments belongsTo Posts
Comment.belongsTo(Post);
Comment.belongsTo(User);

// Posts hasMany Comments
Post.hasMany(Comment);
User.hasMany(Comment);

module.exports = {
  User,
  Post,
  Comment
};