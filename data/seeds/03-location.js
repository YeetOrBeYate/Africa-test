exports.seed = function(knex) {
      // Inserts seed entries
      return knex('location').insert([
        { name: 'CityLocation', user_id:1},
        { name: 'RuralLocation', user_id:2},
        { name: 'CityLocation', user_id:3}
      ]);
};
