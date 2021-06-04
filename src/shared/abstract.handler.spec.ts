import * as Request from '@itcutives/serverless-helpers/src/request';
import * as Response from '@itcutives/serverless-helpers/src/response';

import { AbstractHandler } from './abstract.handler';
import { ConfigInterface } from './config.interface';

describe('AbstractHandler', () => {
  let config: ConfigInterface = null;
  let request;
  let response;

  describe('constructor', () => {
    beforeEach(() => {
      config = {
        env: 'production',
        someVar: 'someVar',
      };
      request = new Request('id', 'method', {}, new URL('http://ctl.com'), {});
      response = new Response();
    });

    it('should set correct variable values', () => {
      const abstract = new AbstractHandler(request, response, config);
      expect(abstract.request).toEqual(request);
      expect(abstract.response).toEqual(response);
      expect(abstract.config).toEqual(config);
    });
  });
});
