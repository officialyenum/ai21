import 'mocha';
import { assert } from 'chai';

import { AI21 } from '../src';
import npmPackage from '../src';
import dotenv from 'dotenv';
dotenv.config();

const token:string = process.env.TOKEN as string;
const aiWithWrongToken = new AI21('lorem_ipsum_token');
const aiWithCorrectToken = new AI21(token);
const aiWithoutToken = new AI21();

describe('AI21 Token', () => {
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
describe('AI21 Token', () => {
  it('Token Not Specified', async () => {
    const resp = await aiWithoutToken.summarize()
    const actual = resp?.message;
    const expected = "Token Not Specified";
    assert.equal(actual, expected);
  });
  it('Text and Type Not Specified', async () => {
    const resp = await aiWithCorrectToken.summarize()
    const actual = resp?.message;
    const expected = "Text and Type Not Specified";
    assert.equal(actual, expected);
  });
});
