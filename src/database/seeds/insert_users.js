const faker = require('faker')

export function seed(knex, Promise) {
  return knex('users')
    .del()
    .then(() =>
      Promise.all([
        knex('users')
          .insert([
            {
              name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            }
          ])
      ])
    )
}