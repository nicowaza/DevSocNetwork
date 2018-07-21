import express from 'express'
import userControler from './user-ctrl'

export const userRouter = express.Router()


userRouter.get('/test', (req, res) => res.json({message:"users works"}))
