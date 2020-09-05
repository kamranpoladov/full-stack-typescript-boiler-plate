import { Request } from 'express';

import { RequestHandler } from './requestHandler';

export enum ApiMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

export type ApiInterface = { [method in ApiMethod]: { [path: string]: any } };

export type RouteBackUniversal<
  AI extends ApiInterface,
  method extends ApiMethod,
  path extends keyof AI[method]
> = (
  handler: RequestHandler<
    AI[method][path]["returnObject"],
    AI[method][path]["params"],
    AI[method][path]["postObject"]
  >,
  request: Request,
  params: any,
  postObject?: AI[method][path]["postObject"]
) => Promise<AI[method][path]["returnObject"]>;

export type RouteFrontUniversal<
  AI extends ApiInterface,
  method extends ApiMethod,
  path extends keyof AI[method]
> = method extends ApiMethod.Put | ApiMethod.Post
  ? (
      params: AI[method][path]["params"],
      postObject: AI[method][path]["postObject"]
    ) => Promise<AI[method][path]["returnObject"]>
  : (
      params: AI[method][path]["params"],
      postObject?: AI[method][path]["postObject"]
    ) => Promise<AI[method][path]["returnObject"]>;
