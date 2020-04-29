
exports.up = async function(knex) {
    await knex.schema.createTable('cars', (table) => {
        table.increments('id')
        table.text('vin').notNull()
        table.text('make').notNull()
        table.text('model').notNull()
    table.float('mileage').notNull()
    table.text('transmission').defaultTo('')
    table.text('status').defaultTo('')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('cars')
};
