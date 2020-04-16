import { Router } from 'express';
import TestController from '../controllers/TestController';

const router = Router();

router.route('/test')
  .get(TestController.getAResponse);

// router.route('/:id')
//   .get(CameraEventController.getAWindow)
//   .put(CameraEventController.updatedWindow)
//   .delete(CameraEventController.deleteWindow);

export default router;
