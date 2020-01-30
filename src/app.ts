import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({
	'origin': '*',
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'preflightContinue': false,
	'allowedHeaders' : ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'walletId'],
	'maxAge' : 86400
}));
app.disable('x-powered-by');
routes(app);

export default app;