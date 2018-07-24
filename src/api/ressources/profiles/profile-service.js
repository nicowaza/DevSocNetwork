import Profile from './profile-model'
import Joi from 'joi'

export default {

  validateProfile(body){
      const schema = Joi.object().keys({
      handle: Joi.string().max(40).required(),
      company: Joi.string().optional(),
      website: Joi.string().optional(),
      location: Joi.string().optional(),
      status: Joi.string().required(),
      skills: Joi.array().items(Joi.string()).required(),
      bio: Joi.string().optional(),
      githubUsername: Joi.string().optional(),
      experience: Joi.array().items(Joi.object().keys({
        title: Joi.string().required(),
        company: Joi.string().required(),
        location: Joi.string().optional(),
        from: Joi.date().required(),
        to: Joi.date().optional(),
        current: Joi.boolean(),
        description: Joi.string().optional(),
      })).optional(),
      education: Joi.array().items(Joi.object().keys({
        school: Joi.string().required(),
        degree: Joi.string().required(),
        fieldOfStudy: Joi.string().required(),
        from: Joi.date().required(),
        to: Joi.date().optional(),
        current: Joi.boolean().valid(false),
        description: Joi.string().optional(),
      })).optional(),
      social: Joi.object().keys({
        youtube: Joi.string().optional(),
        twitter: Joi.string().optional(),
        facebook: Joi.string().optional(),
        linkedin: Joi.string().optional(),
        instagram: Joi.string().optional(),
      }),
      date: Joi.date()
    })
    const {value, error} = Joi.validate(body, schema)
    if (error && error.details){
      return{error}
    }
    return {value}
  }
}
