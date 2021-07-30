import { Router, Request, Response } from 'express';
import { find, add, mockRouter, deleteMock } from '../controllers/addMock'

export default (router:Router) => {

  router.get('/mock/find', (req:Request,res:Response) => {
    find(req.query).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(403).json(err)
    })
  })

  router.post('/mock/add', (req:Request,res:Response) => {
    const params =  req.body;
    mockRouter(params.path, params.method).then(result => {
      if(!result){
        add(params).then(data => {
          if(data){
            res.json({code:1,data:null,message:'sucess'})
          }else{
            res.status(500).json({code:500,message: 'add error'})
          }
        }).catch(err => {
          res.status(500).json({code:500,message: err.message || err})
        })
      }else{
        res.status(200).json({code:200,message:'path already exists'})
      }
    }).catch(err => {
      res.status(500).json({code:500,message: err.message || err})
    })
  }),

  router.post('/mock/delete', (req:Request,res:Response) => {
    deleteMock(req.body.id).then(result => {
      if(result){
        res.status(200).json({code:1,data:null,message:'sucess'})
      }else{
        res.status(500).json({code:500,message: 'delete error'})
      }
    }).catch(err => {
      res.status(500).json({code:500,message: err.message || err})
    })
  })
}