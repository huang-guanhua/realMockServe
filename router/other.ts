import { Router, Request, Response } from 'express';
import { mockRouter } from '../controllers/addMock'

export default (router:Router) => {

  router.all("*", (req:Request,res:Response) => {
    const pathUrl = req.path;
    const requestMethod = req.method;
    mockRouter(pathUrl,requestMethod).then(data => {
      if(data.path && data.mockData){
        res.status(200).json(data.mockData)
      }else{
        res.status(404).json({code: 404,message: 'Not found'}) 
      }
    }).catch(err => {
      res.status(500).json({code:500, message:err.message || err || 'Not found'})
    })
  })
}