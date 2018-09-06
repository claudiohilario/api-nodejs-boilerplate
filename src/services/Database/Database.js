import * as databaseDriversList from './drivers';
/**
 * This function represents the interface of the Connecting in Specific Database.
 */
export default class Database {
  constructor(databaseDriver, config) {
    return new databaseDriversList[databaseDriver](config[databaseDriver]);
  }
}
