import Util from '../utils/Utils';

const util = new Util();

class TestController {
  static async getAResponse(request, response) {
    util.setSuccess(200, 'ok');
    return util.send(response);
  }
}

export default TestController;
