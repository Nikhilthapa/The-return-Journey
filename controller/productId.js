const productData = require("../object");

const productId = async (req, res) => {
  try {
    const id = req.params.id;
    const objectid = Number(id);

    const productget = productData.find((p) => p._id === objectid);
    console.log(productget);
    res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = productId;
