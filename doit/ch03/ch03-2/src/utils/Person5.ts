abstract class AbstractPerson5 {
  constructor(public age?: number) {}
  public abstract makeSound(): void;
}

class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }

  makeSound(): void {
    console.log('뚜벅뚜벅');
  }
}

export let jack5: Person5 = new Person5('Jack', 55);
