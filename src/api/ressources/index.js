import express from 'express'
import { postsRouter } from './ressources/posts/'
import { userRouter } from './ressources/users/'
import { profileRouter } from './ressources/profiles/'
export const restRouter = express.Router()

restRouter.use('./posts', postsRouter)
restRouter.use('./users', userRouter)
restRouter.use('./profiles', profileRouter)
