const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'supersun',
    database: 'information_management'
  }
})

module.exports = require('bookshelf')(knex)