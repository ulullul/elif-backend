import database from '../models';
import last from 'lodash/last';

class CameraService {
  static getAllSnapshots() {
    return database.Camera.findAll();
  }

  static addCameraSnapshot(snapshot, date) {
    return database.Camera.create(snapshot, date);
  }

  static getLastSnapshot() {
    return database.Camera.findAll({
      limit: 1,
      order: [['id', 'DESC']]
    });
  }
}

export default CameraService;
