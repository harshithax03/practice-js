const a = 1;
// console.log(a)

// classes basics
class Math {
    constructor(a,b){
       this.a = a;
       this.b= b
    }
    getSum() {
        return this.a + this.b
    }
    getSubraction() {
        return this.a - this.b
    }

    getMutiply() {
        return this.a *this.b
    }

    getDivision() {
        return this.a / this.b
    }
}
 
const calculator = new Math()    /* instantiation */

console.log(calculator.b)  /* results undefined since a /b are not defiined yet but still we are able to access them */
console.log(calculator.getDivision()) /* returns NaN becuase the a and b are undefined. */
calculator.a = 15; 
calculator.b = 14;
console.log(calculator.getDivision()) /* returns the value. */


const cal = new Math(1,8) /* class with constructor */
console.log(cal.getSum())

// exercise - create a Bank Account class
// Properties = Balance, accountHolder and Account Number
// methods = deposit(amt) - increase amount and withdraw(Amt) - decrease amount

class BankAccount {
    constructor (accountNumber, accountHolder, balance){
        this.accountHolder = accountHolder
        this.accountNumber = accountNumber
        this.balance = balance
    }
    
    deposit(amt){
        if(amt > 0){
            amt = this.balance + amt
            return `the balance is ${amt}`
        } else {
           return `balance is ${this.balance}`
        }
    }
}
const myacc =  new BankAccount(1234, 'haashcap', 900)
