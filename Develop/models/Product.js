// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
// define columns
Product.init(
  {
    // id
    id: {
      // Integer
      type: DataTypes.INTEGER,
      // Doesn't allow null values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      autoIncrement: true,
    },

    // product_name
    product_name: {
      // String
      type: DataTypes.STRING,
      // Doesn't allow null values
      allowNull: false,
    },

    // price
    price: {
      // Decimal
      // Doesn't allow null values
      // Validates that the value is a decimal
    },

    // stock
    stock: {
      // Integer
      // Doesn't allow null values
      // Set a default value of 10
      // Validates that the value is numeric
    },

    // category_id
    category_id: {
      // Integer
      // References the category model's id
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
