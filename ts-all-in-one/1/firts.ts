// ts는? 자바스크립트에서 변수, 매개변수, 리턴값에 타입을 주는 것!
// type
// interface
// :string
// Array<string>
// as
// 함수 의 함수
// function add(x:number, y:number): number;
// function add(x, y){}
// 컴파일 시 자바스크립트 코드에서 사라진다!

// enum : 여러 변수를 하나의 그룹으로 묶을 때 사용?
// as const = 나는 이값을 그대로 상수로 사용하겠다.
{
  const a: string = '5';
  const b: number = 5;
  const c: boolean = true;
  const d: undefined = undefined;
  const e: null = null;

  // const a: number = 5;
  // function add(x: number, y: number): number {
  //   return x + y;
  // }

  // type Add = (x: number, y: number) => number;
  // const add: Add = (x, y) => x + y;
  // const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

  // ts의 핵심
  interface Add {
    (x: number, y: number): number;
  }

  const add: Add = (x, y) => x + y;
}
{
  const a = 5;
  const b = '3';
  const c = a + b;
  function add(x: number, y: number) {
    return x + y;
  }
}
