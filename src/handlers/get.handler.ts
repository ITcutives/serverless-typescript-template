import * as Response from '@itcutives/serverless-helpers/src/response';
import { AbstractHandler } from '../shared/abstract.handler';

export class GetHandler extends AbstractHandler {
  async handle(): Promise<Response> {
    return this.response.respond(200, { request: this.request, config: this.config });
  }
}
