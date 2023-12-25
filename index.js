const app = require("express")();

//tesk 1 Array Manipulation
const array = [5, 9, 8, 5, 9, 7];
const ArrayManipulation = (array) => {
  //   let arr = [];
  let result = array.filter((value, index, self) => {
    return self.indexOf(value) == index;
  });
  return result;
};
console.log("test 1) Array Manipulation==> " + ArrayManipulation(array));

//object merging
const car1 = {
  brand: "TATA",
  model: "TATA NEXON",
  Year: "1993",
};
const car2 = {
  brand: "Hyundai",
  model: "CRETA",
  Year: "1993",
};
const car_result = (car1, car2) => {
  return { car1, car2 };
};
console.log("test 2) Array Manipulation==> ");
console.log(car_result(car1, car2));

//Logical Operation

let arr1 = [5, 6, 9, 6];
let arr2 = [4, 9, 5, 1];
const LogicalResult = (arr1, arr2) => {
  const filteredArray = arr1.filter((value) => arr2.includes(value));
  return filteredArray;
};
console.log("test 3) Logical Operations==> ");
console.log(LogicalResult(arr1, arr2));

//
app.use("/", require("./Router/Router"));
//
app.listen(3001, () => {
  console.log("server running on the port 3001");
});
