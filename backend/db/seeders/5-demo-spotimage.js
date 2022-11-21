'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyaVbl0nsuh8EaWC8BV8uO9lt4STwrhxNmOrApzvguTrUNKi1VBM8t0Qfs9WsyQ3bZnI&usqp=CAU',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnwtif9N2UKkmjYIqGXwmaNYqjglLfqX1Ng&usqp=CAU',
        preview: true
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('SpotImages', {
      url: { [Op.in]: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyaVbl0nsuh8EaWC8BV8uO9lt4STwrhxNmOrApzvguTrUNKi1VBM8t0Qfs9WsyQ3bZnI&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyaVbl0nsuh8EaWC8BV8uO9lt4STwrhxNmOrApzvguTrUNKi1VBM8t0Qfs9WsyQ3bZnI&usqp=CAU', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnwtif9N2UKkmjYIqGXwmaNYqjglLfqX1Ng&usqp=CAU']}
    }, {})
  }
};
