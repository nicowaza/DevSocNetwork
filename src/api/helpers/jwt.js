import jwt from 'jsonwebtoken'
import keys from '../../config/keys'
import User from '../ressources/users/user-model'
import mongoose from 'mongoose'

// const payload = { id: user.id, firstName: user.firstName, lastName: user.lastName, avatar: user.avatar } // create JWT payload

export default {

  //Sign Token
  issue(payload, expiresIn){
    return jwt.sign(payload, keys.secretOrKey, {expiresIn: 10800})
}
}
