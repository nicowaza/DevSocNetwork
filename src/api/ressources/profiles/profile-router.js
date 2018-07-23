import express from 'express'
import profileControler from './profile-ctrl'

export const profileRouter = express.Router()

//route       : GET api/profiles/test
//description : Test profile route
//access      : public
profileRouter.get('/test', (req, res) => res.json({message:"profile works"}))
