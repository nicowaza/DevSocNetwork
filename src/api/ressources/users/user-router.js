import express from 'express'
import userControler from './user-ctrl'

export const userRouter = express.Router()

//route       : GET api/users/test
//description : Test users route
//access      : pubic
userRouter.get('/test', (req, res) => res.json({message:"users works"}))
