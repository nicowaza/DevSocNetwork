import express from 'express'
import profileControler from './profile-ctrl'

export const profileRouter = express.Router()

profileRouter.get('/test', (req, res) => res.json({message:"profile works"}))
