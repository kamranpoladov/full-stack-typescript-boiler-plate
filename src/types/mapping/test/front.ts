import { ApiInterfaceTest } from './apiInterface';
import { getRoutes } from '../frontendTemplate';
import { RouteFrontUniversal, ApiMethod } from '../routes';

type ApiInterfaceLocal = ApiInterfaceTest;

const { reqGet, reqPost, reqPut, reqDelete } = getRoutes<ApiInterfaceLocal>(
  '/tests'
);

// Add more requestors below as your API Interface grows

export const getTest: RouteFrontUniversal<
  ApiInterfaceLocal,
  ApiMethod.Get,
  '/testGet'
> = params => reqGet('/testGet', params);

export const getTestParams: RouteFrontUniversal<
  ApiInterfaceLocal,
  ApiMethod.Get,
  '/testGetParams'
> = params => reqGet('/testGetParams', params);

export const postTest: RouteFrontUniversal<
  ApiInterfaceLocal,
  ApiMethod.Post,
  '/testPost'
> = (params, postObject) => reqPost('/testPost', params, postObject);

export const putTest: RouteFrontUniversal<
  ApiInterfaceLocal,
  ApiMethod.Put,
  '/testPutId'
> = (params, postObject) => reqPut('/testPutId', params, postObject);

export const deleteTest: RouteFrontUniversal<
  ApiInterfaceLocal,
  ApiMethod.Delete,
  '/testDeleteId'
> = params => reqDelete('/testDeleteId', params);
