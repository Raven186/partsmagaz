"use strict";
const bycrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: "biba@mail.com",
        password: await bycrypt.hash("12341234", 10),
        name: "Christopher Biba",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "admin@andrew.com",
        password: await bycrypt.hash("admin123", 10),
        name: "Andrew Admin",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
