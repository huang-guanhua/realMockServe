import express from 'express';
import { port } from './config';


const app = express();
app.get('/', (req:any, res:any)=> {
    res.send('app')
})
app.get('/list', (req: any, res: any) => {
    res.send('list')
})
app.all('*', (req: any, res: any) => {
    res.send('all');
})

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})