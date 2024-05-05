"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Auto_parts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brand: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      photo: {
        defaultValue:
          "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
        type: Sequelize.TEXT,
      },
      articul: {
        unique: true,
        allowNull: false,
        type: Sequelize.TEXT,
      },
      count: {
        validate: {
          min: 0,
        },
        type: Sequelize.INTEGER,
      },
      users_car_vin: {
        allowNull: false,
        references: {
          model: "Users_cars",
          key: "vin",
        },
        onDelete: "CASCADE",
        type: Sequelize.TEXT,
      },
      user_id: {
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Auto_parts");
  },
};
