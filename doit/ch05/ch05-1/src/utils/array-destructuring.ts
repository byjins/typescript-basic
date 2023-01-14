let array1: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array1;

console.log(first, second, third, rest);
