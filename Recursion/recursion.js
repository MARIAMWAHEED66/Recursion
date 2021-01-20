const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let num of numbers) sum += num;
// console.log(sum);
//
// const sum = (array) => {
//   return array.length === 0 ? 0 : array.reduce((sum, num) => sum + num, 0);
// };

// console.log(sum(numbers));

const rSum = (Array) => {
  let sum = 0;
  Array.forEach((element) => {
    if (typeof element === "number") sum += element;
    else sum += rSum(element);
  });
  return sum;
};

console.log(rSum(numbers));
