import { ApiInterface, ApiMethod } from '../routes';
import { RouterParams } from '../routerParams';
import { Test } from '../../models/test';

export interface ApiInterfaceTest extends ApiInterface {
  [ApiMethod.Get]: {
    '/testGet': RouterParams<undefined, undefined, Test>;
    '/testGetParams': RouterParams<{ testParam: string }, undefined, Test[]>;
    // you can add more GET endpoints here
  };
  [ApiMethod.Post]: {
    '/testPost': RouterParams<undefined, Test, Test>;
    // you can add more POST endpoints here
  };
  [ApiMethod.Put]: {
    '/testPutId': RouterParams<{ id: string }, Partial<Test>, Test>;
    // you can add more PUT endpoints here
  };
  [ApiMethod.Delete]: {
    '/testDeleteId': RouterParams<{ id: string }, undefined, void>;
    // you can add more DELETE endpoints heres
  };
}
