const productData = require("../object");

const getproduct_data = (req, res) => {
  try {
    console.log(productData);
    res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = getproduct_data;
