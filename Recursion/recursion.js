const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

// let sum = 0;
// for (let num of numbers) sum += num;
// console.log(sum);

function sum(array) {
  return array.length === 0 ? 0 : array.reduce((sum, num) => sum + num, 0);
}

// const numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers));

// const sum = function (num) {
//   if (num.length < 1) return 0;
//   return num.pop() + sum(num);
// };
// console.log(sum(numbers));
