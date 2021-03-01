import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  /* informacoes do ormconfig.json */
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test'
          ? './src/database/database.test.sqlite'
          : defaultOptions.database,
    }),
  );
};
