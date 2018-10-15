import request from 'supertest';
import server from '../src/index';

afterEach(() => {
  server.close();
});

describe('routes: index', () => {
  test('get should respond as expected', async () => {
    const response = await request(server).get('/ping');
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSnapshot();
  });
  test('post should respond as expected', async () => {
    const response = await request(server).post('/post');
    expect(response.status).toEqual(201);
    expect(response.body).toMatchSnapshot();
  });
});
