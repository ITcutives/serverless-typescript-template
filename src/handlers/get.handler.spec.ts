import * as Request from '@itcutives/serverless-helpers/src/request';
import * as Response from '@itcutives/serverless-helpers/src/response';
import { URL } from 'url';
import { GetHandler } from './get.handler';
import { ConfigInterface } from '../shared/config.interface';

describe('GetHandler', () => {
  let config: ConfigInterface = null;
  let request;
  let response;

  beforeEach(() => {
    config = {
      env: 'production',
      someVar: 'someVar',
    };
    request = new Request('id', 'method', {}, new URL('http://ctl.com'), {});
    response = new Response();
  });

  describe('constructor', () => {
    it('should set correct variable values', () => {
      const abstract = new GetHandler(request, response, config);
      expect(abstract.request).toEqual(request);
      expect(abstract.response).toEqual(response);
      expect(abstract.config).toEqual(config);
    });
  });

  describe('handle', () => {
    it('should return response object with success', async () => {
      const abstract = new GetHandler(request, response, config);
      const returnResponse = new Response();
      returnResponse.statusCode = 200;
      returnResponse.body = { request, config };
      await expect(abstract.handle()).resolves.toEqual(returnResponse);
    });
  });
});
