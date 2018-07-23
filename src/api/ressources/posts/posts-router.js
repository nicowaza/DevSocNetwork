import express from 'express'
import postsControler from './posts-ctrl'

export const postsRouter = express.Router()

//route       : GET api/posts/test
//description : Test post route
//access      : public
postsRouter.route('/test')
  .get(postsControler.test)
