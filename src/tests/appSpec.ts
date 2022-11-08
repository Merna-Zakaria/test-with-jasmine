// fdescribe and fit allows jasmine to focus on one specific suite, skipping the others
// xdescribe and xit allows Jasmine to skip a specific suite or test, running all others.

import {myFunc} from '../app';

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
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
const fun5 = (num:number) => num * 5
it('expect truthy', () => {
  expect(fun5(9)).toBeTruthy() //pass
  // expect(fun5(0)).toBeTruthy()   //fail
})
// If you just need the Boolean value of false, use 
// .toEqual(expected value) for premitive
// .toBe(expected reference) for array & object
const arr1 = [1,2,3]
const arr2 = [1,2,3]
it('expect equality', () => {
  expect(arr1).toEqual(arr2) //pass
  // expect(arr1).toBe(arr2)   //fail
})

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
import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

const numArr = [3, 4,1];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const name = "Merna"

describe('test index fns', () => {
    it('test arrSum()', () => {
        expect(arrays.addArr(numArr)).toEqual(8)
    })
       it('test lgNum()', () => {
        expect(arrays.lgNum(numArr)).toBe(4)
    })
       it('test cut3()', () => {
        expect(arrays.cut3(numArr)[2]).toBeFalsy()
    })
       it('test concatArr()', () => {
        expect(arrays.concatArr(numArr, numArr).length).toBeGreaterThan(numArr.length*2 - 1)
    })
       it('test capitalize()', () => {
        expect(strings.capitalize(name)).toContain('M')
    })
       it('test lowerCase()', () => {
        expect(strings.lowerCase(wordArr[0])).not.toBeNull()
    })
       it('test divide()', () => {
        expect(numbers.divide(6,3)).toEqual(2)
    })
})
