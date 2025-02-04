//arithemetic o/p

// console.log(10 + 89);


// post increment
/* 
1.substitute
2.operation
3.increment
*/

let num = 20;
// let num1 = num ++;

//num1 =20++
//num1 =20;
//num1 = 21;
let num1 = num++ + num++;
//num1 = 20 + 21++
//num1 = 41

console.log(num, num1);

//pre increment
/* 
 1.substitute with increment
 2.operation
*/

let newNum = 40;

// let newNum1 = ++newNum;
//newNum1 = ++40 = 1 + 40 = 41

let newNum2 = ++newNum + ++newNum;
//newNum2 = 41 + 42
//newNum2 = 83

console.log(newNum, newNum2); 

let num3 = 30;
let newNum3 = newNum++ + newNum;
//newNum3 = 30 + 32
//newNum3 = 62
console.log(newNum, newNum3);

