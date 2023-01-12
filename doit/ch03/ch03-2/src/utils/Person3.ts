class Person3 {
  name: string;
  age?: number;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

export let jack3: Person3 = new Person3('Jack', 33);

/** Person2처럼 쓰는 방식이 훨씬 함축해서 사용한 것 */
// class Person2 {
//   constructor(public name: string, public age?: number) {}
// }
