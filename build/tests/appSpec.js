"use strict";
// fdescribe and fit allows jasmine to focus on one specific suite, skipping the others
// xdescribe and xit allows Jasmine to skip a specific suite or test, running all others.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
it('expect myFunc(5) to equal 25', function () {
    expect((0, app_1.myFunc)(5)).toEqual(25);
});
// Test Types
// Truthiness
// .toBeTruthy()passes when
// The expectation has any non-zero value
// The expectation evaluates to true
// .toBeFalsy()passes when the value is:
// 0
// '' (an empty string)
// undefined
// null
// NaN
var fun5 = function (num) { return num * 5; };
it('expect truthy', function () {
    expect(fun5(9)).toBeTruthy(); //pass
    // expect(fun5(0)).toBeTruthy()   //fail
});
// If you just need the Boolean value of false, use 
// .toEqual(expected value) for premitive
// .toBe(expected reference) for array & object
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
it('expect equality', function () {
    expect(arr1).toEqual(arr2); //pass
    // expect(arr1).toBe(arr2)   //fail
});
// Numerical Matchers
// .toBeCloseTo(expected value, precision)
// Passes if a value is within a specified precision of the expected value
// Precision is optional and is represented the number of decimal points to check (defaults to 2)
// .toBeGreaterThan(expected value)
// .toBeLessThan(expected value)
// .toBeGreaterThanOrEqual(expected value)
// .toBeLessThanOrEqual(expected value)
// Negating Other Matchers
// In JavaScript, use the ! to negate
// In TypeScript, use not
// In Jasmine, use .not
// Exceptions
// .toThrow(expected value)
// .toThrowError(expected value, expected message) (expected value and expected message are optional)
// Other Matchers
// .toContain(expected value)
// .toMatch(expected value) regular expretion
// .toBeDefined()
// .toBeUndefined()
// .toBeNull()
// .toBeNan()
// Custom matchers
/////////////////////////////////////////////////
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var strings_1 = __importDefault(require("../utilities/strings"));
var numArr = [3, 4, 1];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var name = "Merna";
describe('test index fns', function () {
    it('test arrSum()', function () {
        expect(arrays_1.default.addArr(numArr)).toEqual(8);
    });
    it('test lgNum()', function () {
        expect(arrays_1.default.lgNum(numArr)).toBe(4);
    });
    it('test cut3()', function () {
        expect(arrays_1.default.cut3(numArr)[2]).toBeFalsy();
    });
    it('test concatArr()', function () {
        expect(arrays_1.default.concatArr(numArr, numArr).length).toBeGreaterThan(numArr.length * 2 - 1);
    });
    it('test capitalize()', function () {
        expect(strings_1.default.capitalize(name)).toContain('M');
    });
    it('test lowerCase()', function () {
        expect(strings_1.default.lowerCase(wordArr[0])).not.toBeNull();
    });
    it('test divide()', function () {
        expect(numbers_1.default.divide(6, 3)).toEqual(2);
    });
});
