import express from 'express';
import { port } from './config';
import router from './router';
import db from './models/db';
import cors from 'cors';
import {json} from 'body-parser';

db.connection.on('error', console.error.bind(console, 'connection error:'));
db.connection.once('open', console.log.bind(console, 'database connect success'))

const app = express();
app.use(cors())
app.use(json())
app.use('/', router)

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})