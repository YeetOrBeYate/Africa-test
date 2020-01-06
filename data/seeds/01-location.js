exports.seed = function(knex) {
      // Inserts seed entries
      return knex('location').insert([
        { location: 'CityLocation'},
        { location: 'RuralLocation'},
        { location: 'CityLocation'}
      ]);
};
