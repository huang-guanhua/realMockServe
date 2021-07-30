import { Schema, model } from 'mongoose';

const mockSchema = new Schema({
  name: String,
  path: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true,
    enum: ['POST','GET','DELETE','PUT']
  },
  mockData: {
    type: Object,
    required: true
  },
  }, { timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }})

export default model('mocks', mockSchema)