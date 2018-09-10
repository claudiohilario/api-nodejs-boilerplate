import { Pool } from 'pg';

export default class PostgreSql {
  constructor(config) {
    this.pool = new Pool(config);

    console.log('Teste');
  }
}
