// Import necessary models
const Blog = require("./Blog");
const Comment = require("./Comm");
const User = require("./User");

// Define associations between models
User.hasMany(Blog, {
  foreignKey: "user_id",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

// Export models
module.exports = { User, Blog, Comment };
