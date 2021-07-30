import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
  nickName: String,
  account: String,
  password: String,
  createDate:{
    type: Date,
    default: Date.now
  }
})

export default model('users', usersSchema)