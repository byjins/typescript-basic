const add =
  (a: number): ((number) => number) =>
  (b: number): number =>
    a + b;
const result = add(1)(2);

export const minus =
  (a: number): ((number) => number) =>
  (b: number): number =>
    a - b;
