// const faker = require('faker');
// const fs = require('fs');
// // const {ItemDetails} = require('./index.js');
// // const {Parse} = require('json2csv');

// //schema? 
//   // vendorName: faker.name.firstName(), 
//   // vendorFirstName: faker.name.firstName(), 
//   // vendorCountry: faker.address.country(), 
//   // shopPolicies: {
//   //   returnsAndExchanges: faker.lorem.sentence(), 
//   //   shippingPolicies: faker.lorem.sentence(), 
//   //   additionalPolicies: faker.lorem.words()
//   //   },
//   // faq: [{question: faker.lorem.word(), 
//   //          answer: faker.lorem.word()
//   //        }],
//   // vendorPhoto: faker.image.imageUrl(), 
//   // vendorResponseTime: faker.random.number(), 
//   // productId: i, 
//   // product: {
//   //   productName: faker.random.word(),
//   //   productDescription: faker.lorem.words()
//   var newItem = (num) => {
//       this.vendorName: faker.company.companyName(), 
//       this.vendorFirstName: faker.name.firstName(), 
//       this.vendorCountry: faker.address.country(), 
//       this.shopPolicies: { 
//         returnsAndExchanges: faker.lorem.sentences(), 
//         shippingPolicies: faker.lorem.sentences(), 
//         additionalPolicies: faker.lorem.sentences()
//         },
//       this.faq: [{question: faker.lorem.sentence(), 
//                answer: faker.lorem.sentence()
//              }],
//       this.vendorPhoto: faker.image.imageUrl(), 
//       this.vendorResponseTime: Math.floor(Math.random()* 30) + ' days', 
//       this.productId: num, 
//       this.product: {
//         productName: faker.commerce.productName(),
//         productDescription: faker.lorem.sentences()
//         }
//       }  



// //await functions for seeding?

// //create writeable stream csv file for products
// const productCsv = fs.createWriteStream('./product.csv');

// function generateProductDataCsv(total, callback) {
//   let i = total;
//   const generateProductLine = () => {
//     return `${faker.name.firstName()}, ${faker.name.firstName()}, ${faker.address.country()} false\n`;
//   }

//   write();

//   function write() {
//     let ok = true;
//     do {
//       i--;
//       ok = productDataCsv.write(generateProductLine(), 'utf8');
//     } while (i > 0 && ok);
//     if (i > 0) {
//       productDataCsv.once('drain', write);
//     } else if (i === 0) {
//       productDataCsv.write(generateProductLine(), 'utf8', callback);
//     }
//   }
// }

// generateProductDataCsv(10000000);