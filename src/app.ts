import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
const app = express();
import config from './config'

app.set('port', config.APP_PORT);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


export default app;