const productData = require("../object");

const updateProduct = (req, res) => {
  try {
    const id = req.params.id;
    const objectId = Number(id);
    console.log(objectId);
    const data = { ProductName: "Updated", price: "55" };
    const foundObject = productData.find((p) => p._id === objectId);

    // If the object is found, modify its name property

    if (foundObject) {
      foundObject.ProductName = data.ProductName;
      foundObject.Price = data.price;
    }
    console.log(productData);
    res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = updateProduct;
