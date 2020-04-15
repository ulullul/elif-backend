import { Router } from 'express';
import { sseHub, Hub } from '@toverux/expresse';
import CameraEventController from '../controllers/CameraEventController';
import CameraDataController from '../controllers/CameraDataController';

const router = Router();
const hub = new Hub();
router.route('/events')
  .get(sseHub({ hub }), CameraEventController.getAllSnapshots)
  .post(sseHub({ hub }), CameraEventController.addSnapshot);

router.route('/data')
  .get(CameraDataController.getAllSnapshots);

router.route('/data/last')
  .get(CameraDataController.getLastSnapshot);
// router.route('/:id')
//   .get(CameraEventController.getAWindow)
//   .put(CameraEventController.updatedWindow)
//   .delete(CameraEventController.deleteWindow);

export default router;
