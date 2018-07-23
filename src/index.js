import express from 'express';
const app = express();
import 'dotenv/config'
import bodyParser from 'body-parser'
import volleyball from 'volleyball'
import passport from 'passport'
import {
  configJWTStrategy
} from './api/middlewares/passport-jwt'
import mongoose from 'mongoose'
import {
  connect
} from './config/db'
import { restRouter } from './api'

const port = process.env.PORT || 5000
connect()

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//passport middleware
app.use(passport.initialize())

//passport config
configJWTStrategy()


app.use('/api', restRouter)

app.get("/", (req, res) => res.send('hi'));



app.listen(port, () => console.log(`server is running on port ${port}`))
