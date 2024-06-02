// Import necessary modules and configure database connection
const Sequelize = require("sequelize");
require("dotenv").config();

// Establish a Sequelize connection with the database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
