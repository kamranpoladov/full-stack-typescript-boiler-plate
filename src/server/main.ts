import express from 'express';
import controllers from './routes';
import bodyParser from 'body-parser';
import { log } from 'debug';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(controllers);

app.listen(port, () => {
  log(`Listening on ${port}...`);
});
