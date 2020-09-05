import express = require("express");

import tests from "./tests";

const router = express.Router();

router.use(
  "/tests",
  // (req, res, next) => {
  //   next();
  // },
  tests
);

console.log(router);

export default router;
