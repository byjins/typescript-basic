export class A {
  value: number = 1;
  method: () => void = function (this: any): void {
    console.log(`value: ${this.value}`);
  };
}
