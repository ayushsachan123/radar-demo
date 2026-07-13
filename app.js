// radar-demo: tiny app for testing the conflict radar
const VERSION = '9.9.9';
const GREETING = 'Hello from queue test';

// Returns a greeting string combining the global message, name, and version
function greet(name) {
  return `${GREETING}, ${name}! (v${VERSION})`;
}

console.log(greet('developer'));
module.exports = { greet, VERSION };
