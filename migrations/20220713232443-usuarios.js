'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      email: Sequelize.STRING(100),
      senha: Sequelize.STRING(100)
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuarios');
  }
};
