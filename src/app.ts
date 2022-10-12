import express, { Application } from 'express';
import cors from 'cors';
import { corsOptions } from './lib/cors';
import router from './routes/v1/index';

const app: Application = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティング
app.use('/v1', router);

export default app;
