"use strict";
const { Model } = require("sequelize");
const Auto_part = require("./auto_part");
const User = require("./user");
const Order = require("./order");
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Auto_part, Order }) {
      this.belongsTo(User, { foreignKey: "user_id" }),
        this.belongsTo(Auto_part, { foreignKey: "auto_part_id" });
      this.belongsTo(Order, { foreignKey: "basket_id" });
    }
  }
  Basket.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        unique: true,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        type: DataTypes.INTEGER,
      },
      auto_part_id: {
        allowNull: false,
        unique: true,
        references: {
          model: "Auto_parts",
          key: "id",
        },
        onDelete: "CASCADE",
        type: DataTypes.INTEGER,
      },
      total_cost: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Basket",
    }
  );
  return Basket;
};
