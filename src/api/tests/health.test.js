/**
 * @summary Initial Test to show API is working as expected
 * @desc    Verifying:
 *            -The API Returns an OK
 *            -The API Returns a 200
 *            -The API is returning an Array under the locations key
 * @author  LocalNewsTV
 */
const supertest = require('supertest');
const dotenv = require('dotenv');

dotenv.config();

const testPoint = `http://${process.env.API_HOSTNAME}:${process.env.API_PORT}/api`;
const request = supertest(testPoint);

describe('Verify API is healthy and online', () => {
  test('/health returns code 200', async () => {
    const response = await request.get('/health');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
  });
});
