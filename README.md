# Prime Number Checker Module

A lightweight, high-performance Node.js module that checks whether a given number is prime.

## Features

- **Time Complexity Optimization**: Uses the $6k \pm 1$ primality test algorithm to check primality in $O(\sqrt{n})$ time with early division exits.
- **Robust Input Validation**: Safely handles non-integers, negative numbers, `NaN`, and non-numeric inputs.
- **Universal CommonJS & ES Module Exports**: Supports both `require()` and `import` styles.

## Installation

```bash
npm install
```

## Usage

```javascript
const isPrime = require('./index');

console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(4));   // false
console.log(isPrime(17));  // true
console.log(isPrime(25));  // false
console.log(isPrime(7919));// true
```

Or using destructuring:

```javascript
const { isPrime } = require('./index');
console.log(isPrime(13)); // true
```

## Running Tests

```bash
npm test
```

## License

MIT © [Ulrich ADIMI](https://github.com/Ulrich62)
