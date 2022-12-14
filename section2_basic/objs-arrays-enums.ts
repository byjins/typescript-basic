// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Jin',
//   age: 30,
//   hobbies: ['Soccer', 'Music'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;

enum Role {
  ADMIN,
  USER,
  AUTHOR,
}

const person = {
  name: 'Jin',
  age: 30,
  hobbies: ['Soccer', 'Music'],
  role: Role.AUTHOR,
};

if (person.role === Role.AUTHOR) {
  console.log('Author 입니다!');
}
console.log(person.role);
