// Code goes here!
abstract class Department {
  static fiscalYear = 2022;
  // private readonly id: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('찾을 수 없습니다.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('값을 입력하세요!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');

    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'max') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Jin']);

it.addEmployee('max');
it.addEmployee('jin');

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'ㅋㅋㅋ';
console.log(accounting.mostRecentReport);

accounting.addReport('이게 맞는건가...');

accounting.addEmployee('max');
accounting.addEmployee('Manu');

// accounting.printEmployeeInformation();
// accounting.printReports();
accounting.describe();
