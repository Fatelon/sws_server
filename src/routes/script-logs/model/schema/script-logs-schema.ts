import mongoose from 'mongoose';

const { Schema } = mongoose;

const types = mongoose.Schema.Types;

export const ScriptLogSchema = new Schema({
  _id: types.ObjectId,
  date: types.Date,
  scriptName: types.String,
  scriptLog: types.String,
  scriptError: types.String
});

export const ScriptLog = mongoose.model('ScriptLog', ScriptLogSchema);