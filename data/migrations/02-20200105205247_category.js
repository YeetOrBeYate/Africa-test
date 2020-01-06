
exports.up = function(knex) {
    return knex.schema.createTable('category',tbl=>{
        tbl.increments();

        tbl.string('category',128)
        .notNullable()

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("category");
};
