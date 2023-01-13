interface IAgeable {
  age?: number;
}

export function getAge(o: IAgeable) {
  return o != undefined ? o.age : 'unknown age';
}

// console.log(getAge(undefined)); //0
// console.log(getAge({ age: 32 }));
