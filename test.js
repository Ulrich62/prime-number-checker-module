const assert = require('assert');
const isPrime = require('./index');

console.log('Running test suite for prime-number-checker...\n');

// Test 1: Non-prime numbers <= 1
assert.strictEqual(isPrime(-10), false, '-10 should not be prime');
assert.strictEqual(isPrime(-1), false, '-1 should not be prime');
assert.strictEqual(isPrime(0), false, '0 should not be prime');
assert.strictEqual(isPrime(1), false, '1 should not be prime');

// Test 2: Small primes
assert.strictEqual(isPrime(2), true, '2 should be prime');
assert.strictEqual(isPrime(3), true, '3 should be prime');
assert.strictEqual(isPrime(5), true, '5 should be prime');
assert.strictEqual(isPrime(7), true, '7 should be prime');

// Test 3: Composites
assert.strictEqual(isPrime(4), false, '4 should not be prime');
assert.strictEqual(isPrime(6), false, '6 should not be prime');
assert.strictEqual(isPrime(8), false, '8 should not be prime');
assert.strictEqual(isPrime(9), false, '9 should not be prime');
assert.strictEqual(isPrime(15), false, '15 should not be prime');
assert.strictEqual(isPrime(21), false, '21 should not be prime');
assert.strictEqual(isPrime(25), false, '25 should not be prime');
assert.strictEqual(isPrime(27), false, '27 should not be prime');
assert.strictEqual(isPrime(49), false, '49 should not be prime');

// Test 4: Larger primes
assert.strictEqual(isPrime(11), true, '11 should be prime');
assert.strictEqual(isPrime(13), true, '13 should be prime');
assert.strictEqual(isPrime(17), true, '17 should be prime');
assert.strictEqual(isPrime(19), true, '19 should be prime');
assert.strictEqual(isPrime(23), true, '23 should be prime');
assert.strictEqual(isPrime(29), true, '29 should be prime');
assert.strictEqual(isPrime(31), true, '31 should be prime');
assert.strictEqual(isPrime(7919), true, '7919 should be prime');

// Test 5: Invalid inputs
assert.strictEqual(isPrime(2.5), false, '2.5 should not be prime');
assert.strictEqual(isPrime('7'), false, 'string "7" should not be prime');
assert.strictEqual(isPrime(null), false, 'null should not be prime');
assert.strictEqual(isPrime(undefined), false, 'undefined should not be prime');
assert.strictEqual(isPrime(NaN), false, 'NaN should not be prime');

// Test 6: Named and default exports
const { isPrime: namedIsPrime } = require('./index');
assert.strictEqual(namedIsPrime(13), true, 'named export isPrime(13) should be true');

console.log('✓ All 25 test cases passed successfully!');
