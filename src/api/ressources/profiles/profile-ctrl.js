import Profile from './profile-model'
import profileService from './profile-service'
import userService from '../users/user-service'
import Joi from 'joi'
import User from '../users/user-model'

export default {
  async findOne(req, res) {
    try {
      // const {id} = req.params
      const profile = await Profile.findById({user: req.user._id})
      if (!profile) {
        return res.status(404).json({err: 'Profil not found'})
      }
      return res.json(profile)
  } catch (err) {
    console.log(err)
    return res.stauts(500).send(err)
  }
},

  async create(req, res){
    try {
      const { value, error } = profileService.validateProfile(req.body);
      if (error && error.details) {
        return res.json(error)
      }
      const profile = await Profile.create(Object.assign({}, value, {user: req.user._id}))
      return res.json(profile);
    } catch (err) {
        console.error(err)
        return res.status(500).send(err);
    }
  },

}
