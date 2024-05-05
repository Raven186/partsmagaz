'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      basket_id: {
        references: {
          model: "Baskets",
          key: "id",
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER
      },
      auto_part_id: {
        allowNull: false,
        unique: true,
        references: {
          model: "Auto_parts",
          key: "id",
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};