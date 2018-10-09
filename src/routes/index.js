import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/ping', async (ctx) => {
  ctx.body = {
    data: 'pong',
  };
});

export default router;
