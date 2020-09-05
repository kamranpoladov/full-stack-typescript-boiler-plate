import express = require("express");
import { RouteWrapper } from "../utils/routerMethods";
import { ApiInterfaceTest, ApiMethod, Test } from "types";

const router = express.Router();
const TestRouter = RouteWrapper<ApiInterfaceTest>();

TestRouter(router, ApiMethod.Get, "/testGet", () => {
  return { field1: "test", field2: 4 };
  // Uncomment to yield type mismatch error:
  // return "string"
  // return 9
  // return { notField: "string"}
});

TestRouter(router, ApiMethod.Get, "/testGetParams", (params) => {
  const { testParam } = params; // testParam is a property of params object
  // const { noTestParam } = params; Uncomment to yield an error
  return [{} as Test];
});

TestRouter(router, ApiMethod.Post, "/testPost", (params, postObject) => {
  // do smth to post a postObject
  return {} as Test;
});

TestRouter(router, ApiMethod.Put, "/testPutId", (params, postObject) => {
  // do smth to update a Test with id of params.id
  return {} as Test;
});

TestRouter(router, ApiMethod.Delete, "/testDeleteId", (params) => {
  // do smth to delete a Test with id of params.id
  return;
});

router.get("/da", (req, res) => {
  res.send("da");
});

console.log(router.stack);

export default router;
