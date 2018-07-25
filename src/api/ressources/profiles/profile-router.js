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

//route       : GET api/profiles/all
//description : Get all profiles
//access      : Public
profileRouter.get('/all', profileControler.findAll)

//route       : GET api/profiles/user/:user_id
//description : Get profile by handle
//access      : Public
profileRouter.get('/user/:user_id', profileControler.findOneById)

//route       : GET api/profiles/handle/:handle
//description : Get profile by handle
//access      : Public
profileRouter.get('/handle/:handle', profileControler.findOneByHandle)

profileRouter.route('/')

  //route       : POST api/profiles
  //description : Post current user profile
  //access      : Private
  .post(userLogged, profileControler.createAndUpdate)


  //route       : GET api/profiles
  //description : Get current user profile
  //access      : Private
  .get(userLogged, profileControler.findOne)
