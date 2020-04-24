import axios from 'axios';
import CameraService from '../services/CameraService';
import Util from '../utils/Utils';

const util = new Util();

class CameraEventController {
  static getAllSnapshots() {}

  static async addSnapshot(request, response) {
    if (request.body.nothingChanged) {
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
      await axios.post('https://ves-2020-chat-api.herokuapp.com/api/message?user=200', {
        text: 'Camera detected face',
        UserId: '200',
        imageAttachment: createdRecord.dataValues.snapshot,
      });
      return response.sse.broadcast.event('faceDetected', `${JSON.stringify(createdRecord)}`);
    } catch (error) {
      return response.sse.broadcast.event('error', error.message);
    }
  }
}

export default CameraEventController;
