'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dispositivos = ['Smartphone', 'SmartWatch', 'Laptop', 'Airpods']
    let estados = ['Disponible', 'Agotado']
    
    for(let dispositivo of dispositivos) {
      await queryInterface.bulkInsert('dispositivos', [{
        descripcion: dispositivo,
        estado: estados[Math.floor(Math.random() * estados.length)],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dispositivos', null, {});
  }
};
