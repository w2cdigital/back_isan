import dotenv from 'dotenv';

dotenv.config();

const ormconfig = {
  type: 'postgres',
  host: process.env.PTG_HOST,
  port: process.env.PTG_PORT,
  username: process.env.PTG_USERNAME,
  password: process.env.PTG_PASSWORD,
  database: process.env.PTG_DATABASE,
  schema: process.env.PTG_SCHEMA,
  logging: true,
  entities: ['./src/modules/**/entities/*.ts'],
  connectTimeoutMS: 30000,
  maxTransactionRetries: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

export { ormconfig };
