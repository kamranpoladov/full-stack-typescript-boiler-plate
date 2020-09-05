import express = require("express");
import router from "./routes/tests";
import bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 1000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
