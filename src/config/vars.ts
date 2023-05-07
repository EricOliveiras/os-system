import * as dotenv from 'dotenv';

dotenv.config();

const port = <string>process.env.PORT;
const saltRoundsEnv = <string>process.env.SALT_ROUNDS;
const saltRounds = parseInt(saltRoundsEnv);
const jwtSecret = <string>process.env.JWT_SECRET;

export {
  port,
  saltRounds,
  jwtSecret
};
