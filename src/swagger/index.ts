import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

import options from './swagger.json';

export default (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(options));
};

