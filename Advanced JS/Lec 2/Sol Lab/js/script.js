
//1
// const student = {
//     name : "Mahmoud Hussein",
//     university: "Beni-suif University",
//     faculty: "Computer Science",
//     finalGrade: "D"
// }

// console.log(`${student.name} 
// is a student in the faculty of ${student.faculty} 
// at ${student.university}, 
// and his final grade is ${student.finalGrade}.`);

//2

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Teacher extends Person {
//     teach(subject) {
//         console.log(`${this.name} is now teaching ${subject}.`);
//     }
// }


// const teacher1 = new Teacher("Eng- Aya");

//teacher1.teach("Front-end");


//3

// class Vehicle {
//     constructor(wheels, speed) {
//         this.wheels = wheels;
//         this.speed = speed;
//         Vehicle.counter();
//     }

//     static count = 0;

//     static counter() {
//         Vehicle.count++;
//     }
// }


// class Bike extends Vehicle {
//     constructor(wheels = 2, speed = 30) {
//         super(wheels, speed);
//     }

//     static getVehicleCount() {
//         return Vehicle.count;
//     }
// }

// const b1 = new Bike();
// const b2 = new Bike();
// const car = new Vehicle(4, 120);

// console.log(`Total Vehicle instances : ${Bike.getVehicleCount()}`);

//4

// class Account {
//     constructor(accNum, balance = 0) {
//         this.accNum = accNum;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`Deposited ${amount}. New Balance: ${this.balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             console.log(`Withdrew ${amount}. Remaining Balance: ${this.balance}`);
//         } else {
//             console.log("balance or invalid amount.");
//         }
//     }

//     getBalance() {
//         return this.balance;
//     }
// }


// class SavingsAccount extends Account {
//     constructor(accNum, balance, interRate) {
//         super(accNum, balance);
//         this.interRate = interRate;
//     }

//     addInterest() {
//         const interest = this.balance * (this.interRate / 100);
//         this.balance += interest;
//         console.log(`Interest added: ${interest}. New Balance: ${this.balance}`);
//     }
// }

// class CurrentAccount extends Account {
//     constructor(accNum, balance, overLimit) {
//         super(accNum, balance);
//         this.overLimit = overLimit;
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.balance + this.overLimit) {
//             this.balance -= amount;
//             console.log(`Withdrew ${amount}. Remaining Balance: ${this.balance}`);
//         } else {
//             console.log("Withdrawal exceeds overdraft limit.");
//         }
//     }
// }

// const savings = new SavingsAccount(101, 500, 5);
// savings.deposit(200);
// savings.addInterest();
// savings.withdraw(100);
// console.log(`Final Balance in Saving: ${savings.getBalance()}`);

// console.log("===========================================");

// const current = new CurrentAccount(102, 300, 200);
// current.withdraw(400);
// current.withdraw(200);
// console.log(`Final Balance in Current: ${current.getBalance()}`);