import express from 'express';
// import morgan from 'morgan';
const morgan = require('morgan');
// const bodyParser = require('body-parser');
// import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import config from './config';
import routes from './routes';
import mongo from './setup/mongo';

const app = express();

mongo.connect(db => {
	app.db = db;
});

if (config.env === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());

app.use('/', routes);

export default app;
