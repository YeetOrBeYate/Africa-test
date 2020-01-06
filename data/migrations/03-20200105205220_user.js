
exports.up = function(knex) {
    return knex.schema.createTable('users',tbl=>{
        tbl.increments();

        tbl.string('username',128)
        .notNullable()
        .unique();

        tbl.string('password', 128)
        .notNullable();

        //foreign key
        tbl.integer('location_id', 128)
        .unsigned()
        .references("id")
        .inTable("location")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
