import { IPerson, ICompany } from './utils/IPerson_ICompany';
import { address } from './utils/rest';

let jack: IPerson = { name: 'Jack', age: 23 };

let apple: ICompany = { name: 'Apple Company', age: 43 };
let ms: ICompany = { name: 'MS', age: 44 };

console.log(jack, apple, ms);

// rest
const { country, city, ...detail } = address;
console.log(detail);
