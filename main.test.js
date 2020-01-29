/**********************************
 * YOUR CODE GOES HERE THIS TIME! *
 **********************************/
let x = 3
let y = 10

let squareTheNumber = 4

let greeting = 'hello'

let firstName = "your name"

let calling = "ringing"

function double() {
x = x * 2
}

function triple() {
y = y * 3
}

function square() {
square() = squareTheNumber * squareTheNumber
}

function beingNice() {
beingNice() = greeting() + firstName()
}

function fullName() {
firstName() = 'not found'
}

function phoneCall() {
  calling = 'call ended'
}


/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof x === 'undefined') {
  x = undefined;
}

if (typeof y === 'undefined') {
  y = undefined;
}

if (typeof squareTheNumber === 'undefined') {
  squareTheNumber = undefined;
}

if (typeof greeting === 'undefined') {
  greeting = undefined;
}

if (typeof firstName === 'undefined') {
  firstName = undefined;
}

if (typeof calling === 'undefined') {
  calling = undefined;
}

if (typeof double === 'undefined') {
  double = undefined;
}

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof square === 'undefined') {
  square = undefined;
}

if (typeof beingNice === 'undefined') {
  beingNice = undefined;
}

if (typeof fullName === 'undefined') {
  fullName = undefined;
}

if (typeof phoneCall === 'undefined') {
  phoneCall = undefined;
}


describe('double', () => {
  it(`doubles x`, () => {
    double();
    expect(x).toEqual(6);
  })
});

describe('triple', () => {
  it(`triples y`, () => {
    triple();
    expect(y).toEqual(30);
  })
});

describe('square', () => {
  it(`squares the variable squareTheNumber`, () => {
    square();
    expect(squareTheNumber).toBe(16);
  })
});

describe('beingNice', () => {
  it(`says hello to the person with the first name in firstName`, () => {
    beingNice();
    expect(greeting.includes('hello') && greeting.includes(firstName)).toBe(true);
  })
});

describe('fullName', () => {
  it(`changes the value of firstName to 'not found'`, () => {
    fullName();
    expect(firstName).toBe('not found')
  })
});
  
describe('phoneCall', () => {
  it(`changes the value of calling to be 'call ended'`, () => {
    phoneCall();
    expect(calling).toBe('call ended')
  })
});