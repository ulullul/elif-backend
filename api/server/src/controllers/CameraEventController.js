import CameraService from '../services/CameraService';
import Util from '../utils/Utils';

const util = new Util();

class CameraEventController {
  static getAllSnapshots() {}

  static async addSnapshot(request, response) {
    if (request.body.nothingChanged) {
      // util.setSuccess(200, 'Nothing changed, ok');
      // return util.send(response);
      return response.sse.broadcast.event('nothingChanged', 'nothing changed');
    }
    if (!request.body.snapshot || !request.body.date || !request.body.time) {
      util.setError(400, 'Incomplete task');
      return util.send(response);
    }
    const newSnapshot = request.body;
    try {
      const createdRecord = await CameraService.addCameraSnapshot(
        newSnapshot
      );
      // response.setHeader('Content-Type', 'text/event-stream');
      return response.sse.broadcast.event('faceDetected', `${JSON.stringify(createdRecord)}`);
      // util.setSuccess(201, 'Snapshot added', createdRecord);
      // return util.send(response);
    } catch (error) {
      return response.sse.broadcast.event('error', error.message);
      // util.setError(400, error.message);
      // return util.send(response);
    }
  }
}

export default CameraEventController;
