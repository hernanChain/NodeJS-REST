import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
import config from './config';
import './database';
import videoRouter from './routes/Video';

app.set('port', config.APP_PORT);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(videoRouter);

export default app;
