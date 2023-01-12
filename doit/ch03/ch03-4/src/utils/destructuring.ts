import { IPerson } from './IPerson_ICompany';

export let jack: IPerson = { name: 'Jack', age: 33 };
let { name, age } = jack;

console.log(name, age); // Jack 33
