const supertest = require('supertest');
const dotenv = require('dotenv');

dotenv.config();

const testPoint = `http://${process.env.API_HOSTNAME}:${process.env.API_PORT}/api`;
const request = supertest(testPoint);

/**
 * Initial Test to show API is working as expected
 */

describe('Verify API is healthy and online', () => {
  test('/health returns code 200', async () => {
    const response = await request.get('/health');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
  });
});
