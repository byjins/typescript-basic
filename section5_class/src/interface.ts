interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;
user1 = {
  name: 'Jin',
  age: 26,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('hi~~');

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};
