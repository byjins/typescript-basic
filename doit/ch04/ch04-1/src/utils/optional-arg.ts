function fn(arg1: string, arg?: number) {
  console.log(`arg: ${arg}`);
}

fn('hello', 1); // arg: 1
fn('hello'); // arg: undefined

// 선택적 매개변수가 있는 함수의 시그니처는 타입 뒤에 물음표를 붙인다.
