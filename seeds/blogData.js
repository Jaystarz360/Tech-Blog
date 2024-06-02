const { Blog } = require("../models");

// Sample data for seeding blogs
const blogData = [
  {
    blogTitle: "Tech Blogology",
    blogBody: "Welcome!",
    user_id: "1",
  },
];

// Function to seed blogs
const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
