"use strict";const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.bulkInsert('users', [{
      nome: 'John Doe',
      email: "email@email.com",
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }],
    {}
    );
  },

  down: async () => {

  }
};
