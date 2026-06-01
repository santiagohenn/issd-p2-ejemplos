const client = require('prom-client');

const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status']
});

const userFeedback = new client.Counter({
  name: 'user_feedback_total',
  help: 'Total user feedback (thumbs up/down)',
  labelNames: ['type']
});

register.registerMetric(httpRequests);
register.registerMetric(userFeedback);

function logRequest(method, route, status) {
  httpRequests.inc({ method, route, status });
}

function logFeedback(type) {
  userFeedback.inc({ type });
}

async function getMetrics() {
  return await register.metrics();
}

function getContentType() {
  return register.contentType;
}

module.exports = {
  logRequest,
  logFeedback,
  getMetrics,
  getContentType
};
