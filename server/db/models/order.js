"use strict";
const { Model } = require("sequelize");
const Auto_part = require("./auto_part");
const Basket = require("./basket");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Auto_part, Basket }) {
      this.belongsTo(Auto_part, { foreignKey: "auto_part_id" }),
        this.hasMany(Basket, { foreignKey: "basket_id" });
    }
  }
  Order.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      basket_id: {
        references: {
          model: "Baskets",
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
      modelName: "Order",
    }
  );
  return Order;
};
