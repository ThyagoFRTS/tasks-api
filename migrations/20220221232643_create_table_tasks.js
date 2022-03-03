/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('tasks', table =>{
		table.increments('id').notNullable()
		table.string('desc').notNullable()
		table.dateTime('estimatedAt')
		table.dateTime('doneAt')
		table.integer('userId').references('id').inTable('users').notNullable()
	})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('tasks')
};
