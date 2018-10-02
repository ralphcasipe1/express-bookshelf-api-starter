const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../.env')})
require('@babel/register')

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  migrations: {
    tableName: 'migrations',
    directory: '../src/database/migrations',
    stub: '../src/database/stubs/migration.stub'
  },
  seeds: {
    directory: '../src/database/seeds',
    stub: '../src/database/stubs/seed.stub'
  }
}