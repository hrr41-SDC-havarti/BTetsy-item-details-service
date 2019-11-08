// const faker = require('faker');
// const fs = require('fs');
// const { Parser } = require('json2csv')
// // // const {ItemDetails} = require('./index.js');
// let i = 200;
// // //schema?
// const generateProduct = () => {
// let product = {
//   productId: i,
//   vendorName: faker.lorem.word(),
//   vendorFirstName: faker.lorem.word(),
//   vendorCountry: faker.lorem.word(),
//   shopPolicies: {
//     returnsAndExchanges: faker.lorem.sentence(),
//     shippingPolicies: faker.lorem.sentence(),
//     additionalPolicies: faker.lorem.words()
//     },
//   faq:[{question: faker.lorem.word(),
//            answer: faker.lorem.word()
//          }],
//   vendorPhoto: faker.image.imageUrl(),
//   vendorResponseTime: faker.random.number(),
//   product: {
//     productName: faker.lorem.word(),
//     productDescription: faker.lorem.words()
//   }
// }
// // let parser = new Parser({header: true, flatten: true})
// // product = parser.parse(product)

// product = JSON.stringify(product)

// return JSON.parse(product);
// }

// // //await functions for seeding?

// // //create writeable stream csv file for products
// const productCsv = fs.createWriteStream('./product.csv');

// productCsv.write("productId, vendorName, vendorFirstName, vendorCountry, shopPolicies, faq, vendorPhoto, vendorResponseTime, product\n", "utf8")

// const writeTenMil = (writer, encoding, callback) => {

//   let id = 0;
//   let write = () => {
//     let ok = true;
//     do {
//       i--;
//       id++;
//       const gd = generateProduct();
//       const productId = gd.productId;
//       const vendorName = gd.vendorName;
//       const vendorFirstName = gd.vendorFirstName;
//       const vendorCountry = gd.vendorCountry;
//       const shopPolicies = gd.shopPolicies;
//       const faq = gd.faq;
//       const vendorPhoto = gd.vendorPhoto;
//       const vendorResponsetime = gd.vendorResponseTime;
//       const product = gd.product;
//       const data = `${productId},${vendorName},${vendorFirstName},${vendorCountry},${JSON.stringify(shopPolicies)},${JSON.stringify(faq)},${vendorPhoto},${vendorResponsetime},${JSON.stringify(product)}\n`;


//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once("drain", write);
//     }
//   };

//   write();
// };

// writeTenMil(productCsv, "utf8", () => {
//   productCsv.end();
//   console.log('FINISHED')
// })

// generateProductDataCsv(10000000);

const fs = require('fs');
const faker = require('faker');
const { Parser } = require('json2csv');
// const csv = require('csvtojson');

const writeStream = fs.createWriteStream('data.csv');

console.time('10,000,000 docs loaded');

function csvLoader(writer, encoding, cb) {
  let i = 10000000;

  function seed() {
    let ok = true;

    do {
      let item = {
        productId: i,
        vendorName: faker.company.companyName(),
        vendorFirstName: faker.name.firstName(),
        vendorCountry: faker.address.country(),
        policies : JSON.stringify([{shippingpolicy: faker.lorem.paragraph().slice(0, 70)}, {returnpolicy: faker.lorem.paragraph().slice(0, 40)}, {additionalpolicies: faker.lorem.paragraph().slice(0, 60)}]),
        faq: JSON.stringify([{question: faker.lorem.sentence().slice(0, 30)}, {answer: faker.lorem.sentence().slice(0,30)}]),
        vendorPhoto: 'https://loremflickr.com/320/240/dog',
        vendorResponseTime: Math.floor(Math.random()* 30) + ' days',
        productName: faker.commerce.productName()
      }

      let parser = new Parser({header: false});

      const csvDetails = parser.parse(item);

      i -= 1;

      if (i === 0) {
        console.log(process.memoryUsage());
        console.log('done loading csv data')
        console.timeEnd('10,000,000 docs loaded');
        writer.write(csvDetails, encoding, cb)
      } else {
        ok = writer.write(csvDetails + '\n', encoding)
      }

    } while ( i > 0 && ok);

    if (i > 0) {

      writer.once('drain', seed)
    }
  }
  seed();
}

csvLoader(writeStream, 'utf-8', () => {
  writeStream.end();
})