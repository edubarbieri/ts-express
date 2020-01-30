import {Express} from 'express';
import healthController from './controllers/health.controller';
export default function(app: Express){
	console.log('Configuring routes...')
	app.use(healthController);
}