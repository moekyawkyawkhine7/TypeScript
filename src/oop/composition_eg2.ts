class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

class Employee {
  private person: Person; // composition

  constructor(person: Person) {
    this.person = person;
  }

  public getPersonName(): string {
    return this.person.getName();
  }
}

let employee1 = new Employee(new Person("Moe Kyaw Kyaw Khaing"));
console.log(employee1.getPersonName());

let employee2 = new Employee(new Person("Kyaw Kyaw"));
console.log(employee2.getPersonName());
