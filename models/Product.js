// Import necessary dependencies from Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the database connection from config.js
const sequelize = require('../config/connection');

// Initialize the Product model (table) by extending Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for the Product model
Product.init(
  {
    // Define the 'id' column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define the 'product_name' column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Define the 'price' column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // Define the 'stock' column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    // Define the 'category_id' column as a foreign key
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // References the 'category' table
        key: 'id'          // Uses the 'id' column in the 'category' table
      }
    }
  },
  {
    sequelize,                  // The Sequelize instance to use for this model
    timestamps: false,          // Disable automatic timestamps (createdAt and updatedAt columns)
    freezeTableName: true,      // Prevent Sequelize from pluralizing the table name
    underscored: true,          // Use snake_case for column names (e.g., product_name instead of productName)
    modelName: 'product',       // Use 'product' as the model name
  }
);

module.exports = Product; // Export the Product model for use in other parts of the application
