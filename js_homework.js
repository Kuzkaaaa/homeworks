var result = 'number' + 3 + 3;
console.log (result);
/*because "number" is string, all of the opeartions will be concatenation
therefore answer is "number33"*/


var result = null + 3;
console.log (result);
//null is threated as "0", thats why this is simple ariphmetic, answer is "3"//


var x = 5
var result = true && (x=5) && "qwerty";
console.log (result);
//answer is "qwerty" because both operations are true, and && returns the last calculated value//


var result = +'40' + +'2' + "hillel";
console.log (result);
/* unary plus tries to convert everything to numbers, therefore numbers in string will be actual numbers
therefore, first we have number 42, and then due to concatenation, we add "hillel" on the right
answer is 42hillel */


var result = '10' - 5 === 6;
console.log (result);
/* simple math, 10-5=5. "===" operator checks if value on the left equals value to the right
And 5 does not equal 6, therefore, answer is "false"*/


var result = true + false;
console.log(result);
/*Boolean values converted to values
true=1
false=0
1+0=1
answer is "1"*/


var result = '4px' - 3 ;
console.log (result);
/* JS tries to convert string "4px" to a number, and then performs mathematical operation
String "4px" contains not only numbers, thus why cannot be converted to numbers directly
Thats why answer is "NaN"*/


var result = '4' - 3;
console.log (result);
/* JS converts string into numbers, therefore string "4" will be threated as a number
Then it's a mathematical operation 4-3
Answer is "1"*/


var result = '6' + 3 ** 0;
console.log (result);
/* "**" is exponentiation operator. 
3 is being rased to the power of 0, and everything that is raised to a 0 equals 1.
'6' + 1 = 61 due to the concatenation fact*/


var result = 12 / '6';
console.log (result);
/* Since only "+" operator have possibility of concatenation, this example goes as a simple math.
String "6" being converted to an actual number, and then 12 is being divided by 6
12/6=2*/


var result = '10' + (5 === 6);
console.log (result);
/* String "10" is converted to the number 10.
"===" checks if number on left equals to the number on the right, and it will be "false" in this scenario.
Then, due to the fact that we are using string parameter "10" and non-string parameter "false", + operator will perform concatenation.
Therefore, we have an answer of "10false"*/


var result = null == '';
console.log (result);
/* Result is false due to the fact that "null" and empty string are different types, and "==" does not perform type conversion between them*/


var result = 3 ** (9 / 3);
console.log (result);
/* 9 / 3 = 3.
3**3 = 3*3*3 = 27 */

var result = !!'false' == !!'true';
console.log (result);
/* '!!' is used to convert a value to its corresponding boolean.
The string 'false' is truthy because it's a non-empty string. 
The string 'true' is also truthy because it's a non-empty string. 
Therefore: !!'false" = true
!!'true' = true
Then by comparing 2 of those boolean values, we see that true == true, which results in answer "true". */


var result = 0 || '0' && 1;
console.log (result);
/* && gives true if both of the operands are true, and returns last calculated value.
|| returns the first truthy operand
'0' && 1 =  '0' is true, so it gives back '1' as last calculated value
0 || 1 = since 0 is false, returns 1 as an answer and first truthy operand*/


var result = (+null == false) < 1;
console.log (result);
/* +null is being converted to 0
0 is always false
0 == false = true
true < 1 = false */


var result = false && true || true;
console.log(result);
/* && gives true if both operations are true, therefore result is 'false' in first scenario
|| gives true if one of the operations is true, therefore:
false || true results in 'true' */


var result = false && (false || true);
console.log (result);
/* (false || true) = true since || returns true if one of the operations is true
false && true = false since && returns true if both of the operations are true */


var result = (+null == false) < 1 ** 5;
console.log (result);
/* +null == false is true because 0 is always false, therefore false == false results in true
1**5 results in 1
true < 1 = false */