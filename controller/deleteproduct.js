const productData = require("../object");

const delete_product = (req, res) => {
  try {
    const id = req.params.id;
    const objectId = Number(id);
    const product = productData.filter((p) => p._id !== objectId);
    console.log(product);
    res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = delete_product;
