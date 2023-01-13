interface INameable {
  name: string;
}

// function getName(o: INameable) {
//   return o.name;
// }

// 오류발생
//let n = getName(undefined);

function getName(o: INameable) {
  return o != undefined ? o.name : 'unknown name';
}

//오류?
//let n = getName(undefined);
//console.log(n); // unknown name
console.log(getName({ name: 'Jack' })); // Jack
