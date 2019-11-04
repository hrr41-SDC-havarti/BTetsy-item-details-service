const { itemDetails } = require('../database/index.js');
const faker = require('faker');


// let thingsToSeed = [];
// let counter = 0;
// for (let i = 0; i < 100000; i++) {
//    thingsToSeed.push(item)
//   }

  var seedIt = (callback) => {
    let item = {
      vendorName: faker.name.firstName(), 
      vendorFirstName: faker.name.firstName(), 
      vendorCountry: faker.address.country(), 
      shopPolicies: {
        returnsAndExchanges: faker.lorem.sentence(), 
        shippingPolicies: faker.lorem.sentence(), 
        additionalPolicies: faker.lorem.words()
        },
      faq: [{question: faker.lorem.word(), 
               answer: faker.lorem.word()
             }],
      vendorPhoto: faker.image.imageUrl(), 
      vendorResponseTime: faker.random.number(), 
      productId: i, 
      product: {
        productName: faker.random.word(),
        productDescription: faker.lorem.words()
        }
       }
    var buildChunk = () => {
      let chunk = [];
      for (let i = 0; i < 100000; i++) {
        chunk.push(item)
      }
      return chunk;
    }
    callback(buildChunk());
  }

  // itemDetails.deleteMany((err) => {
  //   if(err){
  //     console.error(err)
  //   } else {
  //     itemDetails.insertMany(thingsToSeed)
  //   }
  // })


// var generateData = () => {
//   return `{
//   "vendorName": "${faker.lorem.firstName()}", 
//   "vendorFirstName": "${faker.name.firstName()}", 
//   "vendorCountry": "${faker.address.country()}", 
//   "shopPolicies": {
//     "returnsAndExchanges": "${faker.lorem.sentence()}", 
//     "shippingPolicies": "${faker.lorem.sentence()}", 
//     "additionalPolicies": "${faker.lorem.words()}"
//     },
//   "faq": [{"question": "${faker.lorem.word()}", 
//            "answer": "${faker.lorem.word()}"
//          }],
//   "vendorPhoto": "${faker.image.imageUrl()}", 
//   "vendorResponseTime": "${faker.random.number()} days", 
//   "productId": ${faker.random.number()}, 
//   "product": {
//     "productName": "${faker.random.word()}",
//     "productDescription": "${faker.lorem.words()}"
//     }
//   }`
// }




 module.exports.seedIt = seedIt