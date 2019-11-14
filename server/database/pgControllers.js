const { Pool } = require('pg');
// const { itemDetails } = require('./index.js');
const connection="postgres://emily@localhost:5432/items"

const pool = new Pool({
  connectionString: connection
});
//define querying funcs

//get one
// const getOne = (id) => {
//   let queryStr =`select * from products where productId = ${id}`;
//   pool.query(queryStr);
// }
const getOne = (req, res) => {
  let id = req.params.productId;
  pool.query('SELECT * FROM products WHERE productid = $1',  [id], (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

//add new one
// const addOne = (item) => {
//   let queryStr =`insert into products(item) value ('${item}')`;
//   pool.query(queryStr);
// }

const addOne = (req, res) => {
  let item = req.body;
  let queryStr =`insert into products (item) values ('${item}')`;
  console.log(item)
  pool.query(`insert into products (productId, vendorName, vendorFirstName, vendorCountry, shopPolicies, faq, vendorPhoto, vendorResponseTime, product) values ('${item.productId}', '${item.vendorName}', '${item.vendorFirstName}', '${item.vendorCountry}', '${item.shopPolicies}', '${item.faq}', '${item.vendorPhoto}', '${item.vendorResponseTime}', '${item.product}')`, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
    res.status(200).send()
  })
}

// productId: i,
// vendorName: faker.company.companyName(),
// vendorFirstName: faker.name.firstName(),
// vendorCountry: faker.address.country(),
// policies : JSON.stringify([{shippingpolicy: faker.lorem.paragraph().slice(0, 70)}, {returnpolicy: faker.lorem.paragraph().slice(0, 40)}, {additionalpolicies: faker.lorem.paragraph().slice(0, 60)}]),
// faq: JSON.stringify([{question: faker.lorem.sentence().slice(0, 30)}, {answer: faker.lorem.sentence().slice(0,30)}]),
// vendorPhoto: 'https://loremflickr.com/320/240/dog',
// vendorResponseTime: Math.floor(Math.random()* 30) + ' days',
// productName: faker.commerce.productName()
//update one
const updateOne = (id, changes) => {
  let queryStr =``;
}
//delete one
// const deleteOne = (id) => {
//   let queryStr =`delete from products where productId = ${id}`;
// }
const deleteOne = (req, res) => {
  let id = req.params.productId;
  pool.query('delete from products where productid = $1',  [id], (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}



module.exports = {
  getOne,
  addOne,
  updateOne,
  deleteOne
};