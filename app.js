// radar-demo: tiny app for testing the conflict radar
const VERSION = '9.8.8-radar-conflict-demo';
const GREETING = 'Hello from queue test';
const APP_NAME = 'radar-demo';
const MAX_RETRIES = 3;
const TIMEOUT_MS = 5000;
const DEFAULT_PORT = 3000;
const TAGLINE = 'radar online';
const LOG_LEVEL = 'info';
const MAX_CONNECTIONS = 100;
const SESSION_TTL_MS = 30 * 60 * 1000;
const API_BASE_URL = 'http://localhost:3000/api';
const ENV = 'development';
const DEBUG = false;
const MAX_PAYLOAD_BYTES = 1024 * 1024;
const HEARTBEAT_INTERVAL_MS = 10000;
const MAX_LOG_SIZE_BYTES = 10 * 1024 * 1024;
const CACHE_TTL_MS = 60000;
const ALLOWED_ORIGINS = ['http://localhost:3000'];
const REQUEST_ID_HEADER = 'x-request-id';

// Returns a greeting string combining the global message, name, and version
function greet(name) {
  return `${GREETING}, ${name}! (v${VERSION})`;
}

console.log(greet('developer'));
module.exports = { greet, VERSION };
