/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('users', table => {
		table.increments('id').primary()
		table.string('name').notNullable()
		table.string('email').notNullable().unique()
		table.string('password').notNullable()
	})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('users')
};
