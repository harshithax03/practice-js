const a = 1;
// console.log(a)

// classes basics
class Math {
    
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
console.log(calculator.getMutiply()) /* returns the value. */
console.log(calculator.getSum()) /* returns the value. */
console.log(calculator.getSubraction()) /* returns the value. */

