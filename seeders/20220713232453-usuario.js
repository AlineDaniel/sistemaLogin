'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [{
      email: 'admin@sysadmin.com',
      senha: bcrypt.hashSync("123456")
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
  }
};
