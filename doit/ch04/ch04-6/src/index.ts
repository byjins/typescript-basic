const log = (txt: any) => console.log(txt);

import { A } from './utils/A';
import { B } from './utils/B';

const testA: A = new A();
const testB: B = new B();

testA.method(); // value: 1
testB.method(); // value 1
