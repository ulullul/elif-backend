import { Router } from 'express';
import TestController from '../controllers/TestController';

const router = Router();

router.route('/test').get(TestController.getAResponse);

export default router;
