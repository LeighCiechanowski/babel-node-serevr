import dotenv from 'dotenv';
import env from 'getenv';

dotenv.config();

export default {
  port: env('PORT', 1337),
};
