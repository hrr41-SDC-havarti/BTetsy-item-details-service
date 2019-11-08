const copyFrom = require('pg-copy-streams').from;
const fs = require('fs');
const { Pool } = require('pg');

//postgres connection
const connection="postgres://emily@localhost:5432/items"


//define new
const pool = new Pool({
  connectionString: connection
});

pool.connect((err, client, done)=> {


  const stream = client.query(copyFrom('COPY products FROM STDIN CSV'));
  const fileStream = fs.createReadStream('./data.csv');
  fileStream.on('error', (error) => {
    console.log(`Error on fileStream: ${error}`)});

  stream.on('error', (error) => {
    console.log(`Error on stream: ${error}`)});

  stream.on('end',() => {
    console.log('Stream ended')
  });
  fileStream.pipe(stream);
  fileStream.on('end', () => {
    console.log(process.memoryUsage());
    console.log(`CSV imported`)

  })
})

//module.exports
module.exports.pool = pool;


// CREATE TABLE items (`productId INT, vendorName VARCHAR, vendorFirstName VARCHAR, vendorCountry VARCHAR, shopPolicies VARCHAR, faq VARCHAR, vendorPhoto VARCHAR, vendorResponseTime VARCHAR, PRIMARY KEY, product VARCHAR);
//    `
// COPY products(productId, vendorName, vendorFirstName, vendorCountry, shopPolicies, faq, vendorPhoto, vendorResponseTime, product) from '/Users/emeekz/desktop/coding/hackreactor/hrr41-sdc-havarti/Btetsy-item-details/product.csv'