export class calculator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value;
    return this;
  }
  multiply(value: number) {
    this.value *= value;
    return this;
  }
}

let calc = new calculator();
let result = calc.add(1).add(1).multiply(3).multiply(4).value;
console.log(result); // 36
