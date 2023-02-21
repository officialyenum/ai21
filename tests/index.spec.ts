import 'mocha';
import { assert } from 'chai';

import { helloWorld, goodBye, AI21 } from '../src';
import npmPackage from '../src';
import dotenv from 'dotenv';
dotenv.config();

const token:string = process.env.TOKEN as string;
const aiWithWrongToken = new AI21('lorem_ipsum_token');
const aiWithCorrectToken = new AI21(token);

describe('AI21 Summarize', () => {
  it('Token is Correct', () => {
    const actual = token;
    const expected = aiWithCorrectToken.token;
    assert.equal(actual, expected);
  })

  it('Token is Incorrect', () => {
    const actual = token;
    const expected = aiWithWrongToken.token;
    assert.notEqual(actual, expected);
  })
})
describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a helloWorld property', () => {
    assert.property(npmPackage, 'helloWorld');
  });
});

describe('Hello World Function', () => {
  it('should be a function', () => {
    assert.isFunction(helloWorld);
  });

  it('should return the hello world message', () => {
    const expected = 'Hello World from my example modern npm package!';
    const actual = helloWorld();
    assert.equal(actual, expected);
  });
});

describe('Goodbye Function', () => {
  it('should be a function', () => {
    assert.isFunction(goodBye);
  });

  it('should return the goodbye message', () => {
    const expected = 'Goodbye from my example modern npm package!';
    const actual = goodBye();
    assert.equal(actual, expected);
  });
});
