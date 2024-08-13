'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Obtener todos los id de los tipos disponibles
    const [tipos] = await queryInterface.sequelize.query('SELECT id FROM tipos');
    
    // Verificar que hay tipos disponibles
    if (tipos.length === 0) {
      throw new Error('No hay tipos disponibles para asignar a los dispositivos.');
    }

    // Crear un array para almacenar los usuarios
    const dispositivos = [];
    
    // Crear 10 dispositivos con tipos aleatorios
    for (let i = 0; i < 10; i++) {
      const id_tipo = tipos[Math.floor(Math.random() * tipos.length)].id;
      dispositivos.push({
        nombre: `Dispositivo ${i}`,
        precio: Math.floor(Math.random() * 300),
        ubicacion: `Ubicacion del dispositivo ${i}`,
        id_tipo: id_tipo,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Insertar todos los usuarios de una vez
    await queryInterface.bulkInsert('dispositivos', dispositivos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dispositivos', null, {});
  }
};