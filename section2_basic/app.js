// 어떤 사용자가 무엇을 입력할지 모르는 상황
// any와는 다르다.
// any = 타입을 확인하지 않는다.
// unknown = any보다 제한적( 추가적인 검사를 해야한다. 즉, 타입검사를 함 )
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//오류 발생1
//userName = userInput;
//오류 해결
if (typeof userInput === 'string') {
  userName = userInput;
}
function generateError(message, code) {
  throw { message: message, errorCode: code };
}
generateError('error', 500);
