const supertest = require('supertest');
const dotenv = require('dotenv');

/**
 * @summary Testing the get method of the locations endpoint
 * @desc    Verifying:
 *            -The API Returns an OK
 *            -The API Returns a 200
 *            -The API is returning an Array under the locations key
 * @author  LocalNewsTV
 */

dotenv.config();

const testPoint = `http://${process.env.API_HOSTNAME}:${process.env.API_PORT}/api`;
const request = supertest(testPoint);

describe('Verify Locations endpoint functions', () => {
  test('/locations GET fetching all locations', async () => {
    const response = await request.get('/locations');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
    expect(typeof response.body.locations).toBe(typeof []);
    expect(typeof response.body.services).toBe(typeof []);
  });
});
