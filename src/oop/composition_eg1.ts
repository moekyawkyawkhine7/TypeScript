class University {
  private departments: Department[]; // composition

  constructor(departments: Department[]) {
    this.departments = departments;
  }

  addDepartment(department: Department) {
    this.departments.push(department);
  }

  getDepartmentNames(): string[] {
    return this.departments.map((department) => department.getName());
  }
}

class Department {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

let university = new University([
  new Department("HR Department"),
  new Department("Software Department"),
]);
university.addDepartment(new Department("Hardware Department"));
console.log(university.getDepartmentNames());
