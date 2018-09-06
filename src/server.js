//import app from './app';

//app.listen(5000);

import databaseConfig from './settings/database';
import Database from './services/Database/Database';

const database = new Database('postgresql', databaseConfig);
