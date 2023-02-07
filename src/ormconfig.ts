import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  host: 'localhost',
  type: 'postgres',
  username: 'postgres',
  database: 'mediumclone',
  password: '123',
  port: 5432,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};
const config2 = {
  x: 'value',
};
export default { config, config2 };
