import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  sp_endpoint: process.env.SP_ENDPOINT,
  sp_username: process.env.SP_USERNAME,
  sp_password: process.env.SP_PASSWORD,
  sp_prefix: process.env.SP_PREFIX,
  sp_return_url: process.env.SP_RETURN_URL,
};
