"use strict";
const { Model } = require("sequelize");
const User = require("./user");
const Auto_part = require("./auto_part");
module.exports = (sequelize, DataTypes) => {
  class Users_car extends Model {
    static associate({ User, Auto_part }) {
      this.belongsTo(User, { foreignKey: "user_id" }),
        this.hasMany(Auto_part, { foreignKey: "auto_part_id" });
    }
  }
  Users_car.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      vin: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      brand: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      model: {
        allowNull: false,
        type: DataTypes.TEXT,
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
      modelName: "Users_car",
    }
  );
  return Users_car;
};
