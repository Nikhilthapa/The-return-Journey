const getproduct_data = require("../controller/getproduct");
const productData = require("../object");

const mockResponse = {
  end: jest.fn(),
};

describe("getProductData", () => {
  it("should log productData and end the response", () => {
    const mockRequest = {};
    console.log = jest.fn(); // Mock console.log for testing logging

    getproduct_data(mockRequest, mockResponse);

    // Verify that console.log is called with the correct productData
    expect(console.log).toHaveBeenCalledWith(productData);

    // Assuming you want to check that the response's 'end' method is called
    expect(mockResponse.end).toHaveBeenCalled();
  });
});
