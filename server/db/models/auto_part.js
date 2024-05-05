"use strict";
const { Model } = require("sequelize");
const User = require("./user");
const Users_car = require("./users_car");
module.exports = (sequelize, DataTypes) => {
  class Auto_part extends Model {
    static associate({ User, Users_car }) {
      this.belongsTo(User, { foreignKey: "user_id" }),
        this.belongsTo(Users_car, { foreignKey: "users_car_vin" });
    }
  }
  Auto_part.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      brand: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      photo: {
        defaultValue:
          "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
        type: DataTypes.TEXT,
      },
      articul: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      count: {
        validate: {
          min: 0,
        },
        type: DataTypes.INTEGER,
      },
      users_car_vin: {
        allowNull: false,
        references: {
          model: "Users_cars",
          key: "vin",
        },
        onDelete: "CASCADE",
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false,
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
      modelName: "Auto_part",
    }
  );
  return Auto_part;
};
