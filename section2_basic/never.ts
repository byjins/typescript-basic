// 어떤 사용자가 무엇을 입력할지 모르는 상황
// any와는 다르다.
// any = 타입을 확인하지 않는다.
// unknown = any보다 제한적( 추가적인 검사를 해야한다. 즉, 타입검사를 함 )
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

//오류 발생
//userName = userInput;

//오류 해결
if (typeof userInput === 'string') {
  userName = userInput;
}

// never
// 절대 값을 생성하지 않는다.
// 스크립트나 스크립트의 일부를 충돌시킨다.
// never

function generateError(message: string, code: number) {
  throw { message, errorCode: code };
}

generateError('error', 500);
