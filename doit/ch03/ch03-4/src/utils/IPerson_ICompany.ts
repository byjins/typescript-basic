// 아래와 같이 작성한다면 작성하기도 번거롭고 기능을 확장하기도 어렵다.
let personName = 'Jack';
let personAge = 32;

let companyName = 'Apple Company';
let companyAge = 43;

// 아래와 같이 인터페이스나 클래스를 사용해 관련된 정보를 묶어 새로운 타입으로 표현한다.
// 이를 구조화라고 한다.
export interface IPerson {
  name: string;
  age: number;
}

export interface ICompany {
  name: string;
  age: number;
}
