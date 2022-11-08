"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Array
var arr; // only accepts strings
var arr2; // accepts strings or numbers
// 2. Tuple - tuples are not native to JavaScript. When you know exactly what data will be in the array, and you will not be adding to the array or modifying the type for any value, you can use a tuple.
var arr3; // ['cat', 7, 'dog']
// 3. enum - enums are not native to JavaScript but are similar to enumeration used in other languages like C++ and Java. You use an enum when you have a constant set of values that will not be changed.
//  By default, the values in an enum are also given a numeric value starting at 0. However, the numeric value can manually be set to any number explicitly or by calculation. Uses PascalCase to name the type.
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 0] = "Friday";
    Weekend[Weekend["Saturday"] = 1] = "Saturday";
    Weekend[Weekend["Sunday"] = 2] = "Sunday";
})(Weekend || (Weekend = {}));
// 4.Object - creating an object requires defining the object before setting values. Once you have defined the object, additional properties cannot be added to the type definition, making it unhelpful when you need to add more properties after creation.
var student = { name: 'Maria', age: 10, enrolled: true };
var newStudent = { name: 'Maria', age: 10, enrolled: true };
;
;
var newStudentt = { name: 'Maria', age: 10, enrolled: true };
// 9. Classes TypeScript classes look and behave very much like the classes introduced in ES6. A class in programming is made up of member variables and member functions/methods.
//  The same goes for TypeScript, with the big difference being our variables (properties) are typed, as are the parameters and return types for our constructor and methods.
var StudentCInfo = /** @class */ (function () {
    function StudentCInfo(grade, id) {
        this.studentGrade = grade;
        this.studentId = id;
    }
    return StudentCInfo;
}());
// 10. Access Modifiers The biggest addition to TypeScript classes is the addition of access modifiers. Access modifiers are used in most object-oriented programming languages to declare how accessible a variable should be.
// public - by default, all properties of a TypeScript class are public, and it's commonplace to leave off the modifier to denote that it's public. Public properties can be accessed outside of the class.
// private - private properties can only be accessed and modified from the class itself. TypeScript uses the keyword private, but you can also use the # symbol now available for privatizing fields in EcmaScript. Remember that private properties are only private in TypeScript; there are no true private properties in JavaScript classes, so a private property can still be changed if you ignore the error.
// protected - protected properties can be accessed by the class itself and child classes.
var STUDENT = /** @class */ (function () {
    function STUDENT(grade, id) {
        this.studentGrade = grade;
        this.studentId = id;
    }
    STUDENT.prototype.id = function () {
        return this.studentId;
    };
    return STUDENT;
}());
var Graduate = /** @class */ (function (_super) {
    __extends(Graduate, _super);
    function Graduate(grade, id, major) {
        var _this = _super.call(this, grade, id) || this;
        //   this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
        _this.studentGrade = grade; // Accessable because parent is protected
        _this.studentMajor = major;
        return _this;
    }
    return Graduate;
}(STUDENT));
var myStudent = new Graduate(3, 1234, 'computer science');
console.log(myStudent.id()); //  prints 1234
// myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myStudent.id()); // prints 1235
var studentFactory = function (name, age) {
    var greet = function () { return console.log('hello'); };
    return { name: name, age: age, greet: greet };
};
var ourStudent = studentFactory('Hana', 16);
