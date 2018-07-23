import User from './user-model'
import bcrypt from 'bcryptjs'
import Joi from 'joi'


export default {
  encryptedPassword(text, err){
    const salt = bcrypt.genSaltSync(10)
    if (err){
      console.error(err)
    }
    return bcrypt.hashSync(text, salt)
  },
  comparePassword(text, encryptedPassword){
    return bcrypt.compareSync(text, encryptedPassword)
  },
  validateRegister(body){
    //Joi validation of the model
    const schema = Joi.object().keys({
      firstName: Joi.string().min(2).max(30).required(),
      lastName: Joi.string().min(2).max(30).required(),
      userName: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      // avatar: Joi.string()
    })
    const { value, error } = Joi.validate(body, schema)
    if (error && error.details){
      return { error }
    }
    return{ value }
    console.log({value})
  },
  validateLogin(body) {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
  const {value, error} = Joi.validate(body, schema)
  if (error && error.details) {
    return {error}
  }
return {value}
},
}
