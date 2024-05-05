"use strict";
const { Model } = require("sequelize");
const Users_car = require("./users_car");
const Auto_part = require("./auto_part");
const Basket = require("./basket");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Users_car, Auto_part, Basket }) {
      this.hasMany(Users_car, { foreignKey: "user_id" }),
        this.hasMany(Auto_part, { foreignKey: "user_id" }),
        this.hasMany(Basket, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      avatar: {
        defaultValue: "https://www.svgrepo.com/show/452030/avatar-default.svg",
        allowNull: false,
        type: DataTypes.TEXT,
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
      modelName: "User",
    }
  );
  return User;
};
