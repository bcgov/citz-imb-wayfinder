/**
 * @summary Initial Test to show analytic endpoint is working as expected
 * @desc    Verifying:
 *            -The API returns proper results with a good/bad reports
 * @author  LocalNewsTV
 */
const supertest = require('supertest');
const dotenv = require('dotenv');

dotenv.config();

const testPoint = `http://${process.env.API_HOSTNAME}:${process.env.API_PORT}/api`;
const request = supertest(testPoint);
const currentTime = Date.now();

const goodReportPhone = {
  latitude: 12.3456,
  longitude: -123.456,
  time: currentTime,
  eventType: "APITest",
  details: "Powerline down at Veterans and Goldstream",
  phone: "778-555-4321",
}
const goodReportNoPhone = {
  latitude: 12.3456,
  longitude: -123.456,
  time: currentTime,
  eventType: "APITest",
  details: "Powerline down at Veterans and Goldstream",
}
const goodReportBadPhone = {
  latitude: 12.3456,
  longitude: -123.456,
  time: currentTime,
  eventType: "APITest",
  details: "Powerline down at Veterans and Goldstream",
  phone: "1-800-FAIL-NOW",
}
const badReportNoTime = {
  latitude: 12.3456,
  longitude: -123.456,
  eventType: "APITest",
  details: "Powerline down at Veterans and Goldstream",
  phone: "778-555-4321",
}
const badReportDetailsShort = {
  latitude: 12.3456,
  longitude: -123.456,
  time: currentTime,
  eventType: "APITest",
  details: "No power",
  phone: "778-555-4321",
}
const badReportDetailsLong = {
  latitude: 12.3456,
  longitude: -123.456,
  time: currentTime,
  eventType: "APITest",
  details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis fringilla erat, id hendrerit lacus maximus vel. Integer vel magna eu est rutrum venenatis id sit amet urna. Vivamus dignissim semper libero ac pretium. Proin vehicula, risus sit amet pharetra mollis, tortor elit eleifend mauris, at tempus ligula urna eu. ",
  phone: "778-555-4321",
}

describe('Good Report w/ phone', () => {
  test('Valid Report with phone#', async () => {
    const response = await request.post('/report')
      .send(goodReportPhone);
    expect(response.status).toBe(201);
  });
});

describe('Good Report w/o phone', () => {
  test('Test Valid Report No Phone', async () => {
    const response = await request.post('/report')
      .send(goodReportNoPhone);
    expect(response.status).toBe(201);
  });
});

describe('Good Report w/ bad phone', () => {
  test('Test Good Report Bad Phone# (optional field)', async () => {
    const response = await request.post('/report')
      .send(goodReportBadPhone);
    expect(response.status).toBe(400);
  });
});

describe('Bad Report no Time', () => {
  test('No Time', async () => {
    const response = await request.post('/report')
      .send(badReportNoTime);
    expect(response.status).toBe(400);
  });
});

describe('Bad report, Short details', () => {
  test('Small Details', async () => {
    const response = await request.post('/report')
      .send(badReportDetailsShort);
    expect(response.status).toBe(400);
  });
});

describe('Bad report, Long details', () => {
  test('Long details', async () => {
    const response = await request.post('/report')
      .send(badReportDetailsLong);
    expect(response.status).toBe(400);
  });
});

describe('Empty report', () => {
  test('Test Valid Report', async () => {
    const response = await request.post('/report')
      .send({});
    expect(response.status).toBe(400);
  });
});
