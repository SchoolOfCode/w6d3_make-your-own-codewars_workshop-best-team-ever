//👉 Write your tests below here:

// import all the things

import { reverseString } from './main.js';

import jest from 'jest';

// write a test in order to check the following ;
//1- Given a string, write a function that reverses the string

describe('reverseString', () => {
  test('given a string, jest will test that it has been reversed by the provided function', () => {
    //arrange
    const word = 'olleh';
    const expected = 'hello';
    //act
    const actual = reverseString(word);
    //assert
    expect(actual).toBe(expected);
  });
});
