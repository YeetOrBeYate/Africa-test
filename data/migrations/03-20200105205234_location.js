
exports.up = function(knex) {
  return knex.schema.createTable('location',tbl=>{
      tbl.increments();

      tbl.string('name',128)
      .notNullable();


      //foreign key
      tbl.integer('user_id', 128)
      .unsigned()
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("location");
};
