// Fibonacci
const fibonacci = (n) => {
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, n);
};

// Prime filter
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const filterPrimes = (arr) => arr.filter(isPrime);

// GCD
const gcd = (a, b) => (!b ? a : gcd(b, a % b));

// LCM
const lcm = (arr) => arr.reduce((a, b) => (a * b) / gcd(a, b));

// HCF
const hcf = (arr) => arr.reduce((a, b) => gcd(a, b));

module.exports = { fibonacci, filterPrimes, lcm, hcf };
