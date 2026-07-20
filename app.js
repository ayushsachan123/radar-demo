const express = require('express');

const VERSION = '9.8.8-radar-conflict-demo';
const APP_NAME = 'radar-demo';
const DEFAULT_PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
const HEALTH_CHECK_PATH = '/health';

const app = express();
app.use(express.json());

const startTime = Date.now();

app.get(HEALTH_CHECK_PATH, (req, res) => {
  res.json({
    status: 'ok',
    app: APP_NAME,
    version: VERSION,
    env: ENV,
    uptime: Math.floor((Date.now() - startTime) / 1000),
  });
});

app.get(`${HEALTH_CHECK_PATH}/live`, (req, res) => {
  res.json({ status: 'alive' });
});

app.get(`${HEALTH_CHECK_PATH}/ready`, (req, res) => {
  res.json({ status: 'ready' });
});

function greet(name) {
  return `Hello from ${APP_NAME}, ${name}! (v${VERSION})`;
}

if (require.main === module) {
  app.listen(DEFAULT_PORT, () => {
    console.log(`${APP_NAME} v${VERSION} running on port ${DEFAULT_PORT} [${ENV}]`);
  });
}

module.exports = { app, greet, VERSION };
