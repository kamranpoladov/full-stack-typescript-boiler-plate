/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { RouteWrapper } from '../utils/routerMethods';
import { ApiInterfaceTest, ApiMethod, Test } from '../../types';

const router = Router();
const TestRouter = RouteWrapper<ApiInterfaceTest>();

TestRouter(router, ApiMethod.Get, '/testGet', () => {
  const test: Test = {
    field1: 'test',
    field2: 4
  };
  return test;
  // Uncomment to yield type mismatch error:
  // return "string"
  // return 9
  // return { notField: "string"}
});

TestRouter(router, ApiMethod.Get, '/testGetParams', params => {
  const { testParam } = params; // testParam is a property of params object
  // const { noTestParam } = params; Uncomment to yield an error
  const test: Test = {
    field1: 'test',
    field2: 4
  };
  return [test];
});

TestRouter(router, ApiMethod.Post, '/testPost', (_, postObject) => {
  const test = postObject;

  if (!test) throw new Error();

  // do smth to post a postObject

  return test;
});

TestRouter(router, ApiMethod.Put, '/testPutId', (params, postObject) => {
  const { id } = params;
  const test = postObject;

  if (!test) throw new Error();

  // do smth to update a Test with id of params.id

  const updatedTest: Test = {
    field1: 'test',
    field2: 2
  };

  return updatedTest;
});

TestRouter(router, ApiMethod.Delete, '/testDeleteId', params => {
  const { id } = params;
  // do smth to delete a Test with id of params.id
  return;
});

export default router;
