const cassandra = require('cassandra-driver');
const {cassandraDb} = require('../database/cassandra.js');
const {generateData} = require('./testSeed.js');

const seed = async () => {
  try {
    await cassandraDb.execute('drop keyspace if exists products')
  } catch (err) {
    console.error(err);
  }
  try {
    await cassandraDb.execute(`create keyspace products with replication = {
      'class' : 'SimpleStrategy',
      'replication_factor' : 1
    }`)
  } catch (err) {
    console.error(err);
  }
  try {
    await cassandraDb.execute('use products')
  } catch (err) {
    console.error(err);
  }
  try {
    await cassandraDb.execute(`create table products.products(
      id timeuuid primary key, 
      data text
    );`)
  } catch (err) {
    console.error(err);
  }
  
  let startTime = Date.now();
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  

  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  for (let i = 0; i < 1000000; i++) {
    const thisProduct = generateData()
    try {
      await cassandraDb.execute(`insert into products (id, data) values (now(), '${thisProduct}')`,  {prepare: true})
    } catch (err) {
      console.log(thisProduct)
      console.error(err);
    }
  }
  let totalTime = (((Date.now() - startTime)/1000)/60).toFixed(2)
  console.log(`finished seeding in ${(((Date.now() - startTime)/1000)/60).toFixed(2)}`)

}
seed()