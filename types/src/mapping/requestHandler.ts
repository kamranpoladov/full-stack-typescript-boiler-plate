export type RequestHandler<TReturn, TParams, TPost> = (
  params: TParams,
  postObject?: TPost
) => TReturn;
