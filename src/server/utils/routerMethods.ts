import { ApiInterface, ApiMethod, RequestHandler } from '../../types';
import { Router } from 'express';

import { base64ToObj } from './base64';

interface PathToRouterMethod {
  get: Router['get'];
  post: Router['post'];
  put: Router['put'];
  delete: Router['delete'];
}

const apiMethodToRouterMethod: Record<ApiMethod, keyof PathToRouterMethod> = {
  [ApiMethod.Get]: 'get',
  [ApiMethod.Post]: 'post',
  [ApiMethod.Put]: 'put',
  [ApiMethod.Delete]: 'delete'
};

export const RequestWrapper = <
  AI extends ApiInterface,
  Method extends ApiMethod,
  Path extends keyof AI[Method]
>(
  router: Router,
  method: Method,
  path: Path,
  handler: RequestHandler<
    AI[Method][Path]['returnObject'],
    AI[Method][Path]['params'],
    AI[Method][Path]['postObject']
  >
) => {
  const routerMethod = apiMethodToRouterMethod[method];

  const pathWithParam = path + '/:data';
  router[routerMethod](pathWithParam, async (req, res) => {
    const postObject = req.body || undefined;
    const paramsParsed =
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      !req.params || req.params.data !== 'undefined'
        ? base64ToObj(req.params.data)
        : undefined;

    const result = handler(paramsParsed, postObject);
    !!result ? res.send(result) : res.end();
  });
};

export const RouteWrapper = <AI extends ApiInterface>() => <
  Method extends ApiMethod,
  Path extends keyof AI[Method]
>(
  router: Router,
  method: Method,
  path: Path,
  handler: RequestHandler<
    AI[Method][Path]['returnObject'],
    AI[Method][Path]['params'],
    AI[Method][Path]['postObject']
  >
) => RequestWrapper<AI, Method, Path>(router, method, path, handler);
