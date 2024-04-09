class Employee {
    constructor(protected name: string, protected role: string, protected yearOfExperience: number) {}
    calculateSalary(): number{
        return 0;
    }
    
}

class Manager extends Employee {
        constructor(name: string, role: string, yearOfExperience: number) {
            super(name, role, yearOfExperience);
        }
        calculateSalary(): number{
            let salary = 1000;
            if (this.yearOfExperience > 10){
                salary = 1500;
            }
            return salary;
        }
}

class Sale extends Employee{
    constructor(name: string, role: string, yearOfExperience: number) {
        super(name, role, yearOfExperience);
    }
    calculateSalary(): number{
        let salary = 2000;
        if (this.yearOfExperience > 10){
            salary = 2500;
        }
        return salary;
    }
}

let manager = new Manager("John", "Manager", 12);
let sale = new Sale("Jo", "Sales", 20);

console.log("The salary of manager is",manager.calculateSalary());
console.log("The salary of sale is",sale.calculateSalary());


