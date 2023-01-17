import { FirstOrderFunc, SecondOrderFunc } from './utils/function-signature';
import { add } from './utils/second-order-func';
import { add3 } from './utils/third-order-function';

export const inc: FirstOrderFunc<number, number> = (x: number): number => x + 1;

console.log(inc(1));

console.log(add(1)(2));

console.log(add3(1)(2)(3));

const add1: SecondOrderFunc<number, number> = add(1);
