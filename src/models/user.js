import database from '../../config/database' 

const tableName = 'users'

export default database.Model.extend({
  tableName,
  hasTimestamps: true,
})