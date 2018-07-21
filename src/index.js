import express from 'express';
const app = express();
import 'dotenv/config'
import mongoose from 'mongoose'
import {
  connect
} from './config/db'

connect()


app.get("/", (req, res) => res.send('hi'));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running on port ${port}`))