const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BTetsy', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => error);
const itemDetailsSchema = new mongoose.Schema({
  vendorName: String,
  vendorFirstName: String,
  vendorCountry: String,
  shopPolicies: { returnsAndExchange: String, shippingPolicies: String, additionalPolicies: String },
  faq: [{ question: String, answer: String }],
  vendorPhoto: String,
  vendorResponseTime: String,
  productId: Number,
  product: { productName: String, productDescription: String },
});

const itemDetails = mongoose.model('itemDetails', itemDetailsSchema);



module.exports = {
  itemDetails,
};
