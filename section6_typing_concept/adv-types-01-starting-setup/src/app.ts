// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// 인터섹션 타입은 객체 타입과 함께 사용할 때 유용
// 어떤 타입과도 함께 사용 가능
// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'Jin',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

console.log(el);
