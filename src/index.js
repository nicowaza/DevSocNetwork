import express from 'express';
const app = express();
import 'dotenv/config'
import bodyparser from 'body-parser'
import volleyball from 'volleyball'
import passport from 'passport'
import mongoose from 'mongoose'
import {
  connect
} from './config/db'

connect()

app.use(volleyball)
app.use(express.json)
app.use(express.urlencoded({
  extended: true
}))


app.get("/", (req, res) => res.send('hi'));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running on port ${port}`))