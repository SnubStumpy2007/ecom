// Import necessary dependencies from Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize the Tag model (table) by extending Sequelize's Model class
class Tag extends Model {}

// Set up fields and rules for the Tag model
Tag.init(
  {
    // Define the 'id' column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define the 'tag_name' column
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,                  // The Sequelize instance to use for this model
    timestamps: false,          // Disable automatic timestamps (createdAt and updatedAt columns)
    freezeTableName: true,      // Prevent Sequelize from pluralizing the table name
    underscored: true,          // Use snake_case for column names (e.g., tag_name instead of tagName)
    modelName: 'tag',           // Use 'tag' as the model name
  }
);

module.exports = Tag; // Export the Tag model for use in other parts of the application
