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
const RATE_LIMIT_RPM = 60;
const DB_POOL_SIZE = 10;
const SHUTDOWN_GRACE_MS = 5000;
const STATIC_DIR = 'public';
const COOKIE_SECRET = 'radar-secret-key';
const COMPRESSION_LEVEL = 6;
const MAX_UPLOAD_SIZE_MB = 50;
const HEALTH_CHECK_PATH = '/health';
const JWT_EXPIRY_MS = 24 * 60 * 60 * 1000;
const MAX_CONCURRENT_REQUESTS = 50;
const RETRY_DELAY_MS = 1000;
const METRICS_FLUSH_INTERVAL_MS = 15000;

// Returns a greeting string combining the global message, name, and version
function greet(name) {
  return `${GREETING}, ${name}! (v${VERSION})`;
}

console.log(greet('developer'));
module.exports = { greet, VERSION };
