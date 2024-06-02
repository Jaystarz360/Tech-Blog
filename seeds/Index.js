const sequelize = require("../config/connection");
const seedBlog = require("./blogData");
const seedUser = require("./userData");
require("dotenv").config();

// Function to seed the database with user and blog data
const seedAll = async () => {
  // Sync the database
  await sequelize.sync({ force: true });
  // Seed user data
  await seedUser();
  // Seed blog data
  await seedBlog();
};

// Call the seedAll function to seed the database
seedAll();
