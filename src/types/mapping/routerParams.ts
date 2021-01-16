export type RouterParams<TParams, TPost, TReturn> = TPost extends undefined
  ? {
      params: TParams;
      returnObject: TReturn;
    }
  : {
      params: TParams;
      returnObject: TReturn;
      postObject: TPost;
    };
