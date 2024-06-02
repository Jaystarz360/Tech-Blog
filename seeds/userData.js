const { User } = require("../models");

// User data to seed the database
const userData = [
  {
    id: "1",
    username: "Jaystarz360",
    email: "Jaystarz360@email.com",
    password: "Password123",
  },
];

// Function to seed the User table with userData
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
