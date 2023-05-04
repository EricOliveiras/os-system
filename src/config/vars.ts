import * as dotenv from 'dotenv';

dotenv.config();

const port = <string>process.env.PORT;

export { port };
