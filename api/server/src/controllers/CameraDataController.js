import CameraService from '../services/CameraService';
import Util from '../utils/Utils';

const util = new Util();

class CameraDataController {
  static async getAllSnapshots(request, response) {
    try {
      const allSnapshots = await CameraService.getAllSnapshots();
      if (allSnapshots.length > 0) {
        response.setHeader('Content-Type', 'application/json');
        util.setSuccess(200, 'All snapshots', allSnapshots);
      } else {
        util.setSuccess(404, 'Snapshots not found');
      }
      return util.send(response);
    } catch (error) {
      util.setError(500, error);
      return util.send(response);
    }
  }

  static async getLastSnapshot(request, response) {
    try {
      const lastSnapshot = await CameraService.getLastSnapshot();
      if (lastSnapshot.length > 0) {
        response.setHeader('Content-Type', 'application/json');
        util.setSuccess(200, 'Last snapshot', lastSnapshot);
      } else {
        util.setSuccess(404, 'Snapshot not found');
      }
      return util.send(response);
    } catch (error) {
      util.setError(500, error);
      return util.send(response);
    }
  }
}

export default CameraDataController;
