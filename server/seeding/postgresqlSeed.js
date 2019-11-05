const {pool} = require('../database/postgresql.js');
const {generateData} = require('./testseed.js');

const seed = async () => {
  try {
    await pool.connect()
  } catch (err) {
    console.error(err);
  }
  try {
    await pool.query('drop table if exists products')
  } catch (err) {
    console.error(err);
  }
  try {
    await pool.query(`create table products (
      id serial primary key, 
      data json
    )`)
  } catch (err) {
    console.error(err);
  }
  let startTime = Date.now();
  for (let i = 0; i < 100; i++) {
    const thisProduct = generateData()
    try {
      await pool.query(`insert into products (data) values ('${thisProduct}')`)
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  console.log(`finished seeding in ${((Date.now() - startTime) / 1000/60).toFixed(2)}`)

}
seed()