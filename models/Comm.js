// Import necessary modules and setup connection to the database
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Define the Comment model class
class Comment extends Model {}

// Initialize the Comment model with its attributes and configurations
Comment.init(
  {
    comId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user", // Refers to the User model
        key: "id", // Refers to the primary key of the User model
      },
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blog", // Refers to the Blog model
        key: "id", // Refers to the primary key of the Blog model
      },
    },
  },
  {
    sequelize,
    freezeTableName: true, // Prevents pluralization of table names
    modelName: "comment", // Sets the model name to "comment"
  }
);

// Export the Comment model for use in other parts of the application
module.exports = Comment;
