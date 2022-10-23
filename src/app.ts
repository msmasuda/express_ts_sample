import express, { Application } from 'express';
import cors from 'cors';
import log4js from 'log4js';
import { corsOptions } from './lib/cors';
import router from './routes/v1/index';

const app: Application = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// log4jsの設定
log4js.configure('log4js_setting.json');
const logger = log4js.getLogger();
app.use(log4js.connectLogger(logger, {}));

// ルーティング
app.use('/v1', router);

export default app;
