import Axios from "axios";
import { Base64 } from "js-base64";

import { ApiMethod, ApiInterface } from "./routes";

// Change this if you're using library other than axios
const apiMethodToAxios: Record<ApiMethod, ReqFunction> = {
  [ApiMethod.Get]: (section, path, param) =>
    Axios.get(`${section}${path}/${param}`),
  [ApiMethod.Post]: (section, path, param, postData) =>
    Axios.post(`${section}${path}/${param}`, postData),
  [ApiMethod.Put]: (section, path, param, postData) =>
    Axios.put(`${section}${path}/${param}`, postData),
  [ApiMethod.Delete]: (section, path, param) =>
    Axios.delete(`${section}${path}/${param}`),
};

type ReqFunction = (
  section: string,
  path: any,
  param?: string,
  postData?: string | object
) => Promise<any>;

export const frontendRequest = async (
  method: ApiMethod,
  section: string,
  path: any,
  param?: object,
  postData?: string | object
) => {
  const paramEncoded = param ? Base64.encode(JSON.stringify(param)) : undefined;
  const req = await apiMethodToAxios[method](
    section,
    path,
    paramEncoded,
    postData
  );

  return await req.data;
};

export const frontendRequestMethod = (method: ApiMethod) => (
  section: string,
  path: any,
  param?: object,
  postData?: string | object
) => frontendRequest(method, section, path, param, postData);

export const frontendRequestMethodGet = frontendRequestMethod(ApiMethod.Get);
export const frontendRequestMethodPost = frontendRequestMethod(ApiMethod.Post);
export const frontendRequestMethodPut = frontendRequestMethod(ApiMethod.Put);
export const frontendRequestMethodDelete = frontendRequestMethod(
  ApiMethod.Delete
);

type MethodRequester<Path, Params, PostData, Return> = (
  section: string,
  path: Path,
  params?: Params,
  postData?: PostData
) => Promise<Return>;

const MethodRequesterWrapper = <Return>(result: Promise<Return>) => result;

export const frontendRequestMethodSection = <
  AI extends ApiInterface,
  Method extends ApiMethod
>() => <Path extends keyof AI[Method]>(
  methodRequester: MethodRequester<
    keyof AI[Method],
    AI[Method][Path]["params"],
    AI[Method][Path]["postObject"],
    AI[Method][Path]["returnObject"]
  >,
  section: string
) => <
  Path extends keyof AI[Method],
  Return extends AI[Method][Path]["returnObject"]
>(
  path: Path,
  params: AI[Method][Path]["params"],
  postData?: AI[Method][Path]["postObject"]
) =>
  MethodRequesterWrapper<Return>(
    methodRequester(section, path, params, postData)
  );

export const getRoutes = <AI extends ApiInterface>(section: string) => {
  const reqGet = frontendRequestMethodSection<AI, ApiMethod.Get>()(
    frontendRequestMethodGet,
    section
  );
  const reqPost = frontendRequestMethodSection<AI, ApiMethod.Post>()(
    frontendRequestMethodPost,
    section
  );
  const reqPut = frontendRequestMethodSection<AI, ApiMethod.Put>()(
    frontendRequestMethodPut,
    section
  );
  const reqDelete = frontendRequestMethodSection<AI, ApiMethod.Delete>()(
    frontendRequestMethodDelete,
    section
  );

  return { reqGet, reqPost, reqPut, reqDelete };
};
