import KoaRouter from 'koa-router';
import koaBodyParser from 'koa-bodyparser';

const bodyParser = koaBodyParser();

const router = new KoaRouter();

router.all('/', bodyParser);

router.get('/ping', async (ctx) => {
  ctx.body = {
    data: 'pong',
  };
});

router.post('/post', bodyParser, (ctx) => {
  ctx.status = 201;
});

export default router;
