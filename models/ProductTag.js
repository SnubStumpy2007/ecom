// Import necessary dependencies from Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the database connection from config.js
const sequelize = require('../config/connection');

// Initialize the ProductTag model (table) by extending Sequelize's Model class
class ProductTag extends Model {}

// Set up fields and rules for the ProductTag model
ProductTag.init(
  {
    // Define the 'id' column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define the 'product_id' column as a foreign key
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // References the 'product' table
        key: 'id'         // Uses the 'id' column in the 'product' table
      }
    },
    // Define the 'tag_id' column as a foreign key
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // References the 'tag' table
        key: 'id'     // Uses the 'id' column in the 'tag' table
      }
    }
  },
  {
    sequelize,                  // The Sequelize instance to use for this model
    timestamps: false,          // Disable automatic timestamps (createdAt and updatedAt columns)
    freezeTableName: true,      // Prevent Sequelize from pluralizing the table name
    underscored: true,          // Use snake_case for column names (e.g., product_id instead of productId)
    modelName: 'product_tag',   // Use 'product_tag' as the model name
  }
);

module.exports = ProductTag; // Export the ProductTag model for use in other parts of the application
