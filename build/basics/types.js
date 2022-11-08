"use strict";
// Implicit Typing
var myNum = 3; // TypeScript implicitly types myNum as a number based on the variable
// Explicit Typing
var myVar = 3; // myVar has been explicitly typed as a number 
// typeof
console.log(typeof myNum);
// Basic Types
//  1. string
var studentName = "Merna";
//  2. number
var studentAge = 28;
//  3. boolean
var studentGraduated = true;
//  4. Union Types - used when more than one type can be used
var studentPhone;
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;
// 5. null used when variable is not declared yet
var getCapitals = function (str) {
    var capitals = str.match(/[A-Z]/);
    return capitals;
};
console.log(getCapitals('something')); // returns null
console.log(getCapitals('Something')); // returns ['S']
// 6. undefied used when variable is declared but not defied
var myFunc = function (student) {
    if (student === undefined) {
        // do something
    }
};
// 7. void - used as a return type when the function returns nothing
var ourFunc = function (student) {
    console.log(student);
};
// 8. never - used as a return type when the function will never return anything, such as with functions that throw errors or infinite loops
var myError = function (err) {
    throw new Error(err);
};
// 9. any - should be avoided. Used when the type of the item being typed can be anything
var theirFunc = function (student) {
    // do something
};
// 10. unknown - used when the type of the thing being typed is unknown. Used heavily for type assertion
var Func = function (student) {
    var newStudent = student;
    return newStudent;
};
