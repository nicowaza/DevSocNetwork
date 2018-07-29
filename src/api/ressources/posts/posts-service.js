import bcrypt from 'bcryptjs'
import Posts from './posts-model'
import Joi from 'joi'

export default {
   validatePosts(body){
     const schema = Joi.object().keys({
       text: Joi.string().min(5).max(300).required(),
       firstName: Joi.string(),
       lastName: Joi.string()
     })
     const {value, error} = Joi.validate(body, schema)
     if (error && error.details){
       return{error}
     }
     return {value}
   }
   }
