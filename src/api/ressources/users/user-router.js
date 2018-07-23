import express from 'express'
import userControler from './user-ctrl'
import passport from 'passport'

export const userRouter = express.Router()

//route       : GET api/users/test
//description : Test users route
//access      : pubic
userRouter.get('/test', (req, res) => res.json({message:"users works"}))

//route       : POST api/users/register
//description : Register user
//access      : Public
userRouter.post('/register', userControler.register)
userRouter.get('/register', (req, res) => res.json({message:"register works"}))

//route       : POST api/users/login
//description : Login user
//access      : Public
userRouter.post('/login', userControler.login)


//route       : GET api/users/current
//description : Return current user
//access      : Private

userRouter.get('/current', passport.authenticate('jwt', {session: false}), userControler.authenticate)
