import request from 'supertest';
import server from '../src/index';

afterEach(() => {
  server.close();
});

describe('routes: index', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/ping');
    expect(response.status).toEqual(200);
    expect(response.body.data).toEqual('pong');
  });
});
