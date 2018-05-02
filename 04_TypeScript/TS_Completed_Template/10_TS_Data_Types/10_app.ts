/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */

/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/



/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/



/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */


// You can also use template strings, which can span multiple lines and have embedded expressions.



/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */


/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */


/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */


/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */


// Number

let ts_version:number = 2.8;
let output:string = `The TS version is : ${ts_version}`;
console.log(output);
document.getElementById('display').innerHTML = output;


// Boolean
let isTSEasy:boolean = true;
output = `Is TS Easy ? ${isTSEasy}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// String
let message:string = "Don't worry TS is very Easy* ";
output = message;
console.log(output);
document.getElementById('display').innerHTML = output;

// Array
let array1:Array<number> = [10,20,30,40,50];
output = `The array1 values are : ${array1.join(" , ")}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Enum
enum Month{
    JAN = 'JANUARY',
    FEB = 'FEBRUARY',
    MAR = 'MARCH'
}
output = `The JAN Value is : ${Month.JAN}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// void
function greet():void{
    output = `Hello Iam from greet()`;
    console.log(output);
    document.getElementById('display').innerHTML = output;
}

greet();