export type Person = { name: string; age: number };

const printPerson = ({ name, age }: Person): void =>
  console.log(console.log(`${name}-${age}`));
