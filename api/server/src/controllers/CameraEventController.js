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
    if (
      !request.body.snapshot
      || !request.body.date
      || !request.body.time
      || !request.body.faces
    ) {
      util.setError(400, 'Incomplete task');
      return util.send(response);
    }
    const newSnapshot = request.body;
    try {
      const createdRecord = await CameraService.addCameraSnapshot(newSnapshot);
      // await axios.post(process.env.CHAT_MESSAGE_API_URL, {
      //   text: 'Camera detected face',
      //   UserId: '200',
      //   imageAttachment: createdRecord.dataValues.snapshot,
      // });
      return response.sse.broadcast.event(
        'faceDetected',
        `${JSON.stringify(createdRecord)}`,
      );
    } catch (error) {
      return response.sse.broadcast.event('error', error.message);
    }
  }
}

export default CameraEventController;
