import { getAge } from './utils/optional';

const log = (txt: any) => console.log(txt);

console.log(getAge(undefined)); //0
console.log(getAge({ age: 32 }));
