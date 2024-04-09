enum EmployeeType{
  MANAGER = "Manager",
  DEVELOPER = "Developer",
  SALES = "Sales",
}
class Employee {
  constructor(protected name: string, protected role: string) {}
  
  calculateSalary(): number {
      let baseSalary: number;
      if (this.role === EmployeeType.MANAGER) {
          baseSalary = 1000;
      } else if (this.role === EmployeeType.DEVELOPER) {
          baseSalary = 800;
      } else if (this.role === EmployeeType.SALES) {
          baseSalary = 1200;
      } else {
          baseSalary = 0;
      }
      return baseSalary;
  }
}

// Example usage
const manager = new Employee("John", "Manager");
console.log("Salary for manager:", manager.calculateSalary()); // Output: 1000

const developer = new Employee("Alice", "Developer");
console.log("Salary for developer:", developer.calculateSalary()); // Output: 800