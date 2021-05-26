### What is JavaScript??
- JS has nothing to do with JAVA but would rather make more sense to call it ECMA Script
- adds behaviour and interactivity
- it's a scripting language that is intentionally limited....limited how?? it cannot communicate with a database directlybor with a file system.
- it does well at manipulating web pages

### JS is a Client side language
this means that when we enter a URL on the Browser/Client it communicates with the Server and fetches the page and gives(serves) it back to the Client.

- JS can enhance audience experience but not a good idea to rely on JS to add core functionality

### JS Syntax and Rules
- JS is case sensitive
- Statements runt from Left to right and program runs from top to bottom
- a `;` means the end of a statement...preferably pun in a new line for a new statement
- whirespace and line-breaks have no value as such
- order in which you write your JS matter.

### where to put in your JS
- in case of a single page where there is no much js written you can put in your js within a `<script>` tag at the end of the body of the html file
- when there are multiple-pages, you can make a sperate file ending with a `scriptfile.js` and link it to the script tag as such: `<script src="scriptfile.js"></script>`
and write the JS code in the seperate file.

### google dev tools
#### Under Inspect
- **Elements** tab - usually all the html elements are shown here also highlights elements on the page when you hover on the tags.<br>
- **Resourses** tab - usually script is read over here
- **Console** tab - probably the most used one where one can type live JS on the browser. And errors from code is thrown up here. So Debugging is done from here.

Note: `>_` a button that looks like this on the top right corner of the resource tab opens up the console under the resource tab...makes it easier to debug.

### Javascript Variables
- Variable cannot start with a number, cannot be a keyword
- Good practice to camelCase it
- In Js we use var in order to declare variables, you don't really have to specify what kind of variable you are declaring
- Conversion with variable types as  in:
Var1= "SriV" and Var1= 22 is a BAD practice.

### Basic Math Operators
= assignment <br>
 -, +, /, *

 "string" + "conact" = "stringconcat"

 5 + "cats" = "5cats"

 5 * "cats" = NaN

 Var1 = Var1 + 5; is same as Var1=+ 5; same with -=, *= and /=

### Boolean in JS
- Conditional Statements work with True or false conditions
- comparison operators result in true or false
- Boolean() of something is used to evaluate the truthy or falsy value of an integer or a string

Boolean(6) --> true
Boolean(0/-0) -->false
Boolean("sriV") --> true
Boolean("") -->false

### If Statements
- they control flow and logic
- if(a condition is met)<br>{
    execute  this code
} <br>else {execute this code}

**else if** is just an extension with many conditions

### Comparison Operators
 there are > , <, >=, <=, == (equal to), ===(compares value and type), !=(negation with value), !==(nagation with value and type)

 = is NOT a comparison operatior, it is an **Assignment Operator**

 ### Logical Operators
 && And, || Or

 ### While loop
 another control flow statement
 while(condition){code}
 will execute the loop until the condition is false

 ### For Loop
 for(initialisation;contions;increment){code} <br>
will get out of the loop once all conditions are met.

### Break and Continue
 break- will break out of the loop if condition is met <br>
 continue- will skip that particualr iteration that the condition has met.

### Function
What is a function?
when there is lots of code...tends to get messy...hard to maintain and ammend. That's where functions kick in.

- Group Similar sections of code together.<br>
- Name a function using same nomenclature as for variables

function Function_Name (parameters){code} ---> to declare <br>
Function_Name(arguments) ---> to call

### Variable Scope
- Global Variables- having global scope..that means the variables can be used and accessed throughout the program
- Local Variables- they have a block scope can be used and accessed within that block only.

### JS Numbers
Numbers declared "quotes" is a string is not a number.
You do not have to tell JS what kind of number it is...like int,float etc.

`Math.obj` has inbuilt mathematical functions as in square root, round, floor,ceil

### isNaN
"apple" * 5 = NaN ----> how to use this 
- `isNaN` is used to validate if a value is not a Number
- `!isNan` is used to validate if a value is a Number

### Strings
- "quotes" are used in order to declare strings.
- "this is" + "string concat"
- 'this can embed a "string" in another'----> use of single quotes
- string_name.length will tell you how many characters are in that string
- string_name.toUpperCase() ---->will make the string uppercase
- string_name.toLowerCase() ---->will make the string lowercase
- string_name.indexOf("a particular character/word") ->find index of character/s (if word does'nt exist then index will be -1)

### Arrays
- Arrays hold the space of 1 variable but they hold many values in them of various data types
- arrays are usually denoted bt [square brackets]
- one can access various array methods like 
array_name.length ----> result of which is not 0 indexed
array_name.sort---->will sort the array asc or des
array_name.reverse ---> will reverse the array

### Objects
It is basically a container that encloses data and behaviour
- one can call upon properties and functions

var obj_name = {
    key1: "value1",<br>
    key2: value2,<br>
    key3: function(){console.log("value3");};<br>
}<br>

obj_name.key1 = value1 ---->calling property<br>
obj_name.key3() = value3 ---->calling function

### THIS Keyword
THIS reflects on whatever object owns that space when it is called upon

### Constructor Functions




****



