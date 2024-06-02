// Import necessary modules and establish connection to the database
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Define the Blog model class
class Blog extends Model {}

// Initialize the Blog model with its attributes and configurations
Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user", // References the User model
        key: "id", // References the primary key of the User model
      },
    },
  },
  {
    sequelize,
    freezeTableName: true, // Prevents pluralization of table names
    modelName: "blog", // Sets the model name to "blog"
  }
);

// Export the Blog model for use in other parts of the application
module.exports = Blog;
