import express from 'express';
import logger from 'morgan';

const app = express();
app.use(logger('[:date[iso]] - :status :method - :url :response-time ms;'));

export default app;
