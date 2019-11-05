const { itemDetails } = require('./index.js');

// eslint-disable-next-line func-names
const getAllItems = (products) => {
  return itemDetails.find(products)
}

const getOneItem = function (productId) {
  return itemDetails.findOne({ productId });
};

const addOneItem = (item) => {
  return itemDetails.create(item)
}

const updateOneItem = (productId, changes) => {
  return itemDetails.findByIdAndUpdate(productId, changes);
}

const deleteOneItem = (productId) => {
  return itemDetails.deleteOne({ productId });
}
module.exports = {
  getOneItem,
  addOneItem,
  updateOneItem,
  deleteOneItem, 
  getAllItems

};
