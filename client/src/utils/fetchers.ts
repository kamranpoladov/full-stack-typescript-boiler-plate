import { getTest, getTestParams, postTest, Test } from "types";

export const fetchTest = async () => {
  return await getTest(undefined);
};

export const fetchTestParams = async (params: { testParam: string }) => {
  return await getTestParams(params);
};

export const addTest = async (params: undefined, postObject: Test) => {
  return await postTest(params, postObject);
};
