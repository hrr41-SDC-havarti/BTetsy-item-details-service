const { itemDetails } = require('../database/index.js');
const faker = require('faker');


var generateData = () => {
  return `{
  "vendorName": "${faker.lorem.word()}", 
  "vendorFirstName": "${faker.lorem.word()}", 
  "vendorCountry": "${faker.lorem.word()}", 
  "shopPolicies": {
    "returnsAndExchanges": "${faker.lorem.sentences()}", 
    "shippingPolicies": "${faker.lorem.sentences()}", 
    "additionalPolicies": "${faker.lorem.sentences()}"
    },
  "faq": [{"question": "${faker.lorem.word()}", 
           "answer": "${faker.lorem.word()}"
         }],
  "vendorPhoto": "${faker.image.imageUrl()}", 
  "vendorResponseTime": "${faker.random.number()} days", 
  "productId": ${faker.random.number()}, 
  "product": {
    "productName": "${faker.lorem.words()}",
    "productDescription": "${faker.lorem.sentences()}"
    }
  }`
}
// console.log(JSON.parse(generateData()))




  module.exports.generateData = generateData