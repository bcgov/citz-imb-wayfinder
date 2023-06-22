/**
 * @summary Initial Test to show analytic endpoint is working as expected
 * @desc    Verifying:
 *            -The API returns proper results with a good/bad analytics
 * @author  LocalNewsTV
 */
const supertest = require('supertest');
const dotenv = require('dotenv');

dotenv.config();

const testPoint = `http://${process.env.API_HOSTNAME}:${process.env.API_PORT}/api`;
const request = supertest(testPoint);
const goodAnalytic = {
  latitude: 12.34,
  longitude: 43.21,
  usage : {
    search: "Child Care BC",
    function: "find service"
  },
  date: Date.now()
}

describe('Verify API receiving report', () => {
  test('sending valid report', async () => {
    const response = await request.post('/analytic')
      .send(goodAnalytic);
    expect(response.status).toBe(201);
  });
});

const badAnalytic = {
  latitude: "N 12.34",
  longitude: "W 43.21",
  usage : {
    search: "Child Care BC",
    function: "running test"
  },
  date: Date.now()
}

describe('Verify API receiving report', () => {
  test('sending invalid report', async () => {
    const response = await request.post('/analytic')
      .send(badAnalytic)
    expect(response.ok).toBe(false);
    expect(response.status).toBe(400);
  });
});
