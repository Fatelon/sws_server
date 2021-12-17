import bodyParser from 'body-parser';
import database from './database';
import scriptLogs from './routes/script-logs/script-logs';

const express = require('express');

const app = express();

database.init();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Origin, Ns-Secret-Key, X-Requested-With");
  next();
});

app.use('/api/v1/logs', scriptLogs);

app.get('/', async function(req, res, next) {
  res.send('Wellcome to SWS ssecured sentinel =)');
});

app.listen(process.env.PORT || 8080);
