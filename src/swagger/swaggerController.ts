import { Request, Response } from 'express';

export default {
  swagger(request: Request, response: Response) {
    return response.sendFile(process.cwd() + '/src/swagger/swagger.json');
  },

  docs(request: Request, response: Response) {
    return response.sendFile(process.cwd() + '/src/swagger/index.html');
  }
};
