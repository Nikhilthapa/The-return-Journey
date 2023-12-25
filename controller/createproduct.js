const productData = require("../object");

const createProduct = (req, res) => {
  try {
    const product_data = { _id: 8, ProductName: "sparx", Price: "1200" };
    const final_data = productData.push(product_data);
    console.log(productData);
    res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = createProduct;
