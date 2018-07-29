import jwt from 'jsonwebtoken'
import keys from '../../config/keys'
import User from '../ressources/users/user-model'
import mongoose from 'mongoose'


export default {

  //Sign Token
  issue(payload, expiresIn){
    return jwt.sign(payload, keys.secretOrKey, {expiresIn: 10800})
}
}
