# History of javascript:

The founder of Netscape "Mark Andreessen" decide to develope a programming language for his Netscape.
In September 1995 he hired one guy called "Brendon Eich" to develope that language.
The first time when this language was developed called "MOCHA".Then change to "LIVESCRIPT" and finally it name gives to "JAVASCRIPT".

#Data types: 

JavaScript has 8 Datatypes:
1.String
2.Number
3.Bigint
4.Boolean
5.Undefined :- In JavaScript, undefined is a primitive data type that means a variable has been declared but not assigned a value yet.
Example:-
let a;
console.log(a); // Output: undefined
6.Null
7.Symbol
8.Object

The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

EXAMPLE:

// Numbers:
let length = 15;
let weight = 7.5;

// Strings:
let color = "red";
let lastName = "kumar";

// Booleans
let x = true;
let y = false;

// Object:
const person = {
    firstName:"Nitish", lastName:"Kumar"
};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

#Variables :

Variables are Containers for Storing Data.

JavaScript Variables can be declared in 3 ways:

1.Using var :
NOTE:
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.

2.Using let
3.Using const

When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.

# DIALOG BOXES IN JAVASCRIPT:

There are three types of dialog box.
1.alert
   
example:
alert("messages")

2.confirm

example:
confirm("messages")

3.prompt

example:
prompt("messages")

#String Methods and Properties.

Javascript strings are primitive and immutable: All string methods produce a new string 
without altering the original string.

String length
String charAt()
String charCodeAt()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
String slice()
String substring()

Example:

```bash
//string methods

//length : this is a property of string
const fullname ="nitish kumar"
const output=fullname.length;
console.log(output);

//charAt()
const message="Hi Everyone"
console.log(message.charAt(4));

//charCodeAt()
//it provide ASCIi code of character
console.log(message.charCodeAt(0));

let n="nitish kumar";
console.log(n.toUpperCase());

let m="NITISH KUMAR"
console.log(m.toLowerCase());


const str1 ="nitish"
const str2 ="kumar"
let a=str1.concat(" " , str2);
console.log(a);

//trim() method only trim the starting and ending spaces
const i ="   Hello,my name is nitish  ";
console.log(i.trim());

//it trim the starting spaces
console.log(i.trimStart());

//it trim the ending spaces
console.log(i.trimEnd());

//padStart()
const number="4578"
const ans =number.padStart(15,'*')
console.log(ans);

//padEnd()
console.log(number.padEnd(10 ,"*"));

//repeat()
const h ="hello world"
const r= h.repeat(3);
console.log(r); 

//replace()
const text = "Hello world";
console.log(text.replace("world","Everyone"));


//replaceAll()
console.log(text.replaceAll("l" ,"L"));

//split()
const word="hello,everyone"
console.log(word.split());

//slice()
const msg ="hello world"
console.log(msg.slice(0,6));

//substring()
const sub ="computer"
console.log(sub.substring(3,6));

```

#Template Strings(Template Literals):

Here are some main ponits about template string.
1.Template Strings use back-ticks (``) rather than the quotes ("") to define a string.
  example:
  let text = `Hello World!`;

2.Template Strings allow both single and double quotes inside a string.
  example:
  let text = `He's often called "Johnny"`;

3.Template Strings allow multiline strings.
  Example:
   let text =
  `The quick
   brown fox jumps over
   the lazy dog`;

4.Variable Substitutions
Template Strings allow variables in strings

    Example.
    let firstName = "spider";
    let lastName = "man";
    let text = `Hello ${firstName}, ${lastName}!`;














