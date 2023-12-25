const productId = require("../controller/productId");

const mockRequest = (id) => ({ params: { id } });
const mockResponse = {
  end: jest.fn(),
};

describe("productId", () => {
  it("should find and log the product with the given id", async () => {
    const mockRequestInstance = mockRequest("2");
    console.log = jest.fn(); // Mock console.log for testing logging

    await productId(mockRequestInstance, mockResponse);

    // Verify that console.log is called with the correct product information
    expect(console.log).toHaveBeenCalledWith(
      expect.objectContaining({ _id: 2, ProductName: "Bugati", Price: "2199" })
    );

    // Assuming you want to check that the response's 'end' method is called
    expect(mockResponse.end).toHaveBeenCalled();
  });
});
