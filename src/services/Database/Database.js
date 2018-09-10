import { Pool } from 'pg';

export default class Database {
  constructor(config) {
    this.pool = new Pool(config);
  }

  query(querySQL, params) {

  }
}
