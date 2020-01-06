const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Inserts seed entries
  return knex('users').insert([
    { username: 'Kyle', password:bcrypt.hashSync('Kyle',8), location_id:1},
    { username: 'Jet', password:bcrypt.hashSync('Jet',8), location_id:2},
    { username: 'Erica', password:bcrypt.hashSync('Erica',8), location_id:3}
  ]);
};
