import { Response } from '@itcutives/serverless-helpers/src/response';
import { Request } from '@itcutives/serverless-helpers/src/request';
import { ConfigInterface } from './config.interface';

export class AbstractHandler {
  protected req: Request;

  protected res: Response;

  protected cfg: ConfigInterface;

  constructor(request: Request, response: Response, config: ConfigInterface) {
    this.req = request;
    this.res = response;
    this.cfg = config;
  }

  get request(): Request {
    return this.req;
  }

  get response(): Response {
    return this.res;
  }

  get config(): ConfigInterface {
    return this.cfg;
  }
}
