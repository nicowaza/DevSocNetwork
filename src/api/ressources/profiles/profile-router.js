import express from 'express'
import profileControler from './profile-ctrl'
import passport from 'passport'
import { isUser } from '../../middlewares/isUser'

export const profileRouter = express.Router()

const userLogged = [passport.authenticate('jwt', {session: false}), isUser]
//route       : GET api/profiles/test
//description : Test profile route
//access      : public
profileRouter.get('/test', (req, res) => res.json({message:"profile works"}))

//route       : GET api/profiles
//description : Get current user profile
//access      : Private

profileRouter.route('/')
  .get(userLogged, profileControler.findOne)
  .post(userLogged, profileControler.create)
