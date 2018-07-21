import express from 'express'
import postsControler from './posts-ctrl'

export const postsRouter = express.Router()


postsRouter.route('/test')
  .get(postsControler.test)
