import express from 'express'
import postsControler from './posts-ctrl'

export const postsRouter = express.Router()


postsRouter.get('/test', (req, res) => console.log({message:"posts works"}))
