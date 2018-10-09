import Koa from 'koa';
import routes from './routes';
import config from './config';
import logger from './utils/logger';

const app = new Koa();
app.use(routes.routes());
const server = app.listen(config.port, () => {
  logger.info(`Server running at http://127.0.0.1:${config.port}`);
});

export default server;
