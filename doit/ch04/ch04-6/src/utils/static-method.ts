export class C {
  static whoAreYou(): string {
    return `I'm class C`;
  }
}

export class D {
  static whoAreYou(): string {
    return `I'm class D`;
  }
}

C.whoAreYou(); // I'm class C
D.whoAreYou(); // I'm class D
