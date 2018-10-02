export function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table
      .string('name')
      .notNull()
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'))
    table
      .timestamp('updated_at').notNull()
      .notNull()
      .defaultTo(knex.raw('now()'))
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}