import mongoose from 'mongoose';
import {mongodbPath} from '../config';

mongoose.connect(mongodbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const db = mongoose;

export default db

