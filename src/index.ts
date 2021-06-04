import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import * as Request from '@itcutives/serverless-helpers/src/request';
import * as Response from '@itcutives/serverless-helpers/src/response';
import * as LambdaResponseFormatter from '@itcutives/serverless-helpers/src/lambdaResponseFormatter';
import 'source-map-support/register';
import * as config from './helpers/config';
import { Methods } from './handlers';

const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<Response> => {
  // eslint-disable-next-line no-param-reassign
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const request = Request.normaliseLambdaRequest(event);
    const response = new Response();
    const method = request.method.toLowerCase();
    const handle = new Methods[method](request, response, config);
    const resp = await handle.handle();
    return LambdaResponseFormatter.responseHandler(resp);
  } catch (e) {
    console.error(e);
    return LambdaResponseFormatter.responseHandler(e);
  }
};

export { handler };
