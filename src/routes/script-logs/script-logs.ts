import express from 'express';
import { Types } from 'mongoose';

import { ScriptLog } from './model/schema/script-logs-schema';
import { ScriptLogI } from './model/script-logs';

const scriptLogs = express.Router();

const deselectors = '-__v';

scriptLogs.get('/', async function(req, res, next) {
  console.log('GET scriptLogs');

  const logs = await ScriptLog.find(req.mongoQuery).select(deselectors);

  res.send(logs);
  next();
});

scriptLogs.post('/', async function(req, res, next) {
  console.log('POST scriptLogs');
  const body = req.body;
  const newLog : ScriptLogI = {
    _id: new Types.ObjectId as any,
    date: new Date(),
    // scriptName: string;
    scriptName: body.Completed,
    scriptLog: body.Results,
    scriptError: body.Errors
  } as ScriptLogI;

  const product: any = await new ScriptLog(newLog);
  const saveProductRes =  await product.save();
  res.json('scriptLogs posted', saveProductRes);
});

export default scriptLogs;