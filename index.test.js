const request = require('supertest');
const app = require('./index');

test('GET / returns welcome message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Welcome to PulseDeploy');
});

test('GET /health returns UP status', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('UP');
});

test('GET /version returns version number', async () => {
  const res = await request(app).get('/version');
  expect(res.statusCode).toBe(200);
  expect(res.body.version).toBe('1.0.0');
});
