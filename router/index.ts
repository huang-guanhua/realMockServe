import express from 'express';
import mockApi from './mock';
import other from './other';

const router = express.Router();

// 注意执行顺序
mockApi(router);
other(router);



export default router;