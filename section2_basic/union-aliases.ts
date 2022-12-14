// add = 숫자를 더한다는 뜻?
// combine = 숫자나 문자를 더한다는 뜻, 숫자 또는 문자열로 리턴

// 유니언 타입
// 여러 타입을 사용해야 할 때
// 내부적으로 런타임 검사가 필요할 수도 있다.
// 유니언 타입 = number | string -> type
// 리터럴 타입 = 'as-number' | 'as-text' -> 내가 정의한 텍스트?

// type alias
// 항상 유니언 타입을 반복하는 것은 번거롭다. 이를 해결하기 위한 것

// type alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// type alias는 union만 가능한게 아니다. 객체또한 가능하다
type User = { name: string; age: number };

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor,
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Jin', 'Yoo', 'as-text');
console.log(combineNames);
