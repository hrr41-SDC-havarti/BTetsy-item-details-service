const { Pool, Client } = require('pg');
const connection="postgres://emily@localhost:5432/items";

const pool = new Pool({
  user: 'emily',
  host: 'localhost',
  database: 'items',
  port: 5432
});

pool.query('SELECT NOW()', (err, res) => {
  console.log('pool query working')
  pool.end();
})

const client = new Client({
  connectionString: connection
})

client.connect()
  .then(() => {
    console.log('Client connected successfully');
  })
  .catch((err) => {
    console.error('Error: ', err);
  })
  .finally(() => {
    client.end();
  })