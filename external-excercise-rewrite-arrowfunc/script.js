// filter: Tạo một mảng mới với các phần tử thỏa mãn điều kiện
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// any: Kiểm tra xem có ít nhất một phần tử thỏa mãn điều kiện
Array.prototype.myAny = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// some: Giống any, nhưng tên hàm phổ biến hơn trong các ngôn ngữ khác
Array.prototype.mySome = Array.prototype.myAny;

// map: Tạo một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// reduce: Giảm mảng thành một giá trị duy nhất
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// find: Tìm phần tử đầu tiên thỏa mãn điều kiện
Array.prototype.myFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

const numbers = [1, 2, 3, 4, 5];

// Sử dụng các phương thức mới
const evenNumbers = numbers.myFilter(num => num % 2 === 0);
const doubledNumbers = numbers.myMap(num => num * 2);
const sum = numbers.myReduce((acc, num) => acc + num, 0);
const foundNumber = numbers.myFind(num => num > 3);

console.log(evenNumbers);     // Output: [2, 4]
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
console.log(sum);             // Output: 15
console.log(foundNumber);     // Output: 4