const faker = require('faker');
const fs = require('fs');
const { Parser } = require('json2csv')
// // const {ItemDetails} = require('./index.js');
let i = 100;
// //schema? 
const generateProduct = () => {
let product = {
  productId: i, 
  vendorName: faker.lorem.word(), 
  vendorFirstName: faker.lorem.word(), 
  vendorCountry: faker.lorem.word(), 
  shopPolicies: {
    returnsAndExchanges: faker.lorem.sentence(), 
    shippingPolicies: faker.lorem.sentence(), 
    additionalPolicies: faker.lorem.words()
    },
  faq:[{question: faker.lorem.word(), 
           answer: faker.lorem.word()
         }],
  vendorPhoto: faker.image.imageUrl(), 
  vendorResponseTime: faker.random.number(), 
  product: {
    productName: faker.lorem.word(),
    productDescription: faker.lorem.words()
  }
}
// let parser = new Parser({header: true, flatten: true})
// product = parser.parse(product)

product = JSON.stringify(product)

return JSON.parse(product);
}
  
// //await functions for seeding?

// //create writeable stream csv file for products
const productCsv = fs.createWriteStream('./product.csv');

productCsv.write("productId, vendorName, vendorFirstName, vendorCountry, shopPolicies, faq, vendorPhoto, vendorResponseTime, product\n", "utf8")

const writeTenMil = (writer, encoding, callback) => {
  
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const gd = generateProduct();
      const productId = gd.productId;
      const vendorName = gd.vendorName;
      const vendorFirstName = gd.vendorFirstName;
      const vendorCountry = gd.vendorCountry;
      const shopPolicies = gd.shopPolicies;
      const faq = gd.faq;
      const vendorPhoto = gd.vendorPhoto;
      const vendorResponsetime = gd.vendorResponseTime;
      const product = gd.product;
      const data = `${productId},${vendorName},${vendorFirstName},${vendorCountry},${JSON.stringify(shopPolicies)},${JSON.stringify(faq)},${vendorPhoto},${vendorResponsetime},${JSON.stringify(product)}\n`;


      const fields = ['shopPolicies.returnsAndExchanges', 'shopPolicies.shippingPolicies', 'shopPolicies.additionalPolicies' ]
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  };

  write();
};

writeTenMil(productCsv, "utf8", () => {
  productCsv.end();
  console.log('FINISHED')
})

// generateProductDataCsv(10000000);