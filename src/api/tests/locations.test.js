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
    expect(typeof response.body.serviceBCLocations).toBe(typeof []);
    expect(typeof response.body.serviceBCServices).toBe(typeof []);
    expect(typeof response.body.allServices).toBe(typeof []);
  });
});

describe('Verify Locations POST method', () => {
  test('/locations POST fetching only ServiceBC data', async () => {
    const response = await request.post('/locations').send({"serviceType": "ServiceBC"})
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
    expect(typeof response.body.locationData).toBe(typeof []);
    expect(typeof response.body.serviceData).toBe(typeof []);
  })
})

describe('Verify Locations POST method', () => {
  test('/locations POST fetching only HealthBC data', async () => {
    const response = await request.post('/locations').send({"serviceType": "HealthBC"})
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
    expect(typeof response.body.locationData).toBe(typeof []);
    expect(typeof response.body.serviceData).toBe(typeof []);
  })
})

describe('Verify Locations POST method', () => {
  test('/locations POST requesting Invalid data', async () => {
    const response = await request.post('/locations').send({"serviceType": "supertest"})
    expect(response.ok).toBe(false);
    expect(response.status).toBe(400);
  })
})

describe('Verify Locations PATCH method with no Authorization', () => {
  test('/locations POST requesting Invalid data', async () => {
    const response = await request.patch('/locations')
    expect(response.ok).toBe(false);
    expect(response.status).toBe(403);
  })
})
