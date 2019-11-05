const pg = require('pg')

//postgres connection
const connection="postgres://emily@localhost:5432/postgres"


//define new 
const pool = new pg.Pool({
  connectionString: connection
});


//module.exports
module.exports.pool = pool;
