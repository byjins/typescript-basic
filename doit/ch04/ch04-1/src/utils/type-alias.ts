type stringNumberFunc = (string, number) => void;

let f: stringNumberFunc = function (a: string, b: number): void {};

let s: stringNumberFunc = function () {};
//s();
