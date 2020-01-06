exports.seed = function(knex) {
  // Inserts seed entries
  return knex('category').insert([
    { name: 'Food'},
    { name: 'Tools'},
    { name: 'Decorations'}
  ]);
};
