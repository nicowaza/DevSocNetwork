import express from 'express'
import postsControler from './posts-ctrl'
import passport from 'passport'
import { isUser } from '../../middlewares/isUser'

export const postsRouter = express.Router()

const userLogged = [passport.authenticate('jwt', {session: false}), isUser]

//route       : POST api/posts
//description : Create posts
//access      : Public
postsRouter.route('/')
  .post(userLogged, postsControler.addPosts)

  //route       : GET api/posts
  //description : Get posts
  //access      : Public
  .get(postsControler.findAllPosts)
