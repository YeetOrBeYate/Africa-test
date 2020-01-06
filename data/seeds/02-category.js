exports.seed = function(knex) {
  // Inserts seed entries
  return knex('category').insert([
    { category: 'Food'},
    { category: 'Tools'},
    { category: 'Decorations'}
  ]);
};
