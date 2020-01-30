import { Router} from "express";

const healthRouter = Router();

healthRouter.get('/health', function(_, resp) {
	resp.send('OK').status(200);
});

export default healthRouter;