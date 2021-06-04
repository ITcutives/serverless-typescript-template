import { ConfigInterface } from '../shared/config.interface';

const config: ConfigInterface = {
  env: process.env.NODE_ENV,
  someVar: process.env.SOME_VAR,
};
export default config;
