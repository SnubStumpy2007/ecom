// Import necessarky dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');  // Import Sequelize connection

// Define the Categroy model class that extends the Sequelize Model Class
class Category extends Model {}

Category.init(  // initallize the model's attributes (Columns in the database).  This represents a single table in my database.
  {
    id: {                      // The name of the comlumn (Validations and constraints below)
      type:DataTypes.INTEGER,  // Data type for the column (INTEGER)
      allowNull: false,        // Disallow null values for this column (By default null is allowed so it must be explicitly prohibited)
      primaryKey: true,        // Indicates that this column is the primary key
      autoIncrement: true      // Auto-increment the value for each new record
    },
      category_name: {
        type: DataTypes.STRING, // Data tykpe for the column (STRING)
        allowNull: false        // Disallow null values for this column
      }
  },
  {
    sequelize,                  // The Sequelize instance to use for this model
    timestamps: false,          // Disable automatic timestamps (createdAt and updatedAt columns)
    freezeTableName: true,      // Prevent Sequelize from pluralizing the table name
    underscored: true,          // Use snake_case for column names (e.g., category_name instead of categoryName)
    modelName: 'category',      // Use 'category' as the model name (Name of the table)
  }
);

module.exports = Category;
