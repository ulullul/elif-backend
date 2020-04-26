import database from '../models';

class CameraService {
  static getAllSnapshots() {
    return database.Camera.findAll();
  }

  static addCameraSnapshot(snapshot, date, time) {
    return database.Camera.create(snapshot, date, time);
  }

  static getLastSnapshot() {
    return database.Camera.findAll({
      limit: 1,
      order: [['id', 'DESC']],
    });
  }
}

export default CameraService;
