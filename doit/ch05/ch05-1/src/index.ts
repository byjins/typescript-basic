import { split } from './utils/split';
import { join } from './utils/join';
const log = (txt: any) => console.log(txt);

console.log(split('hello'));
console.log(split('h_e_l_l_o', '_')); // ['h','e','l','l','o']

// join
console.log(join(['h', 'e', 'l', 'l', 'o'])); // hello
