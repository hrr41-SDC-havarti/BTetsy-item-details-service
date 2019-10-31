const { itemDetails } = require('./index.js');

// eslint-disable-next-line func-names
const getOneItem = function (productId) {
  return itemDetails.findOne({ productId });
};

// var getOneItem = async function() {
//   const itemDetails = await itemDetails.findOne({vendorLocation: "California"});
//   return itemDetails;
// }
const addOneItem = () => {
  
}

const updateOneItem = () => {

}

const deleteOneItem = (productId) => {
  return itemDetails.findByIdAndRemove({productId});
}
module.exports = {
  getOneItem,
  addOneItem,
  updateOneItem,
  deleteOneItem

};
