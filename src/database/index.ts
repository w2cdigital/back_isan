import { DataSource } from 'typeorm';
import { resolve } from 'path';
import { ormconfig } from '../../ormconfig';
import dotenv from 'dotenv';

dotenv.config();

const path = resolve(__dirname, '..', '..');

const entitiesPath =
  process.env.NODE_ENV === 'production'
    ? path + '/src/modules/**/entities/*.js'
    : path + '/src/modules/**/entities/*.ts';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.HOST,
  port: Number(process.env.PORT_DATABASE),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: false,
  entities: [entitiesPath],
});

AppDataSource.initialize()
  .then(() => {
    console.log('*'.repeat(50));
    console.log('Database connected successfully');
    console.log('*'.repeat(50));
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export { AppDataSource };
