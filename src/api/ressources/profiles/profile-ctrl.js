import Profile from './profile-model'
import profileService from './profile-service'
import userService from '../users/user-service'
import Joi from 'joi'
import User from '../users/user-model'


export default {
async createAndUpdate(req, res) {
  try {
    const {value, error} = profileService.validateProfile(req.body);
    if (error && error.details) {
      return res.json(error)
    }
    const profile = await Profile.findOneAndUpdate(
    { user: req.user.id },
    { $set: value },
    { new: true }
  )
    if (profile) {
      return res.json(profile)
    } else {
    const profile = await Profile.create(Object.assign({}, value, {user: req.user._id}))
    return res.json(profile);
    }
  } catch (err) {
    console.error(err)
    return res.status(500).send(err);
  }
},


async addJob(req, res) {
    try{
    const profile = await Profile.findOne({ user: req.user._id })

      if (!profile) {
        return res.status(404).json({err: 'there is no profil for this user'})
      }
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      }
      //add to experiecne array
      profile.experience.unshift(newExp)
      profile.save()
        .then(profile => res.json(profile))
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },

async addEduc(req, res) {
    try{
    const profile = await Profile.findOne({ user: req.user._id })

      if (!profile) {
        return res.status(404).json({err: 'there is no profil for this user'})
      }
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldOfStudy: req.body.fieldOfStudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      }
      //add to experiecne array
      profile.education.unshift(newEdu)
      profile.save()
        .then(profile => res.json(profile))
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },


//
//  Profile.findOne({user: req.user.id})
//     .then(profile => {
//       const newJob = {
//       title: req.body.title,
//       company: req.body.from,
//       location: req.body.location,
//       to: req.body.to,
//       current: req.body.current,
//       description: req.body.description,
//     }
//
//     profile.experience.unshift(newJob)
//     profile.save().then(profile => res.json(profile))
// })
// },

async findAll(req, res) {
  try {

    const profiles = await Profile.find().populate('user', ['firstName', 'lastName', 'avatar'])
    if (!profiles) {
      return res.status(404).json({err: 'There are no profils'})
    }
    return res.json(profiles)
} catch (err) {
  console.log(err)
  return res.status(500).send(err)
}
},
  async findOne(req, res) {
    try {
      // const {id} = req.params
      console.log({user: req.user.id})
      const profile = await Profile.findOne({user: req.user.id}).populate('user', ['firstName', 'lastName', 'avatar'])
      if (!profile) {
        return res.status(404).json({err: 'Profil not found'})
      }
      return res.json(profile)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
  }
},

async findOneByHandle(req, res) {
  try{
  const profile = await Profile.findOne({ handle: req.params.handle })
    .populate('user', ['firstName', 'lastName', 'avatar'])
    if (!profile) {
      return res.status(404).json({err: 'there is no profil for this user'})
    }
    return res.json(profile)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
  }
},

async findOneById(req, res) {
  try{
  const profile = await Profile.findOne({ user: req.params.user_id })
    .populate('user', ['firstName', 'lastName', 'avatar'])
    if (!profile) {
      return res.status(404).json({err: 'there is no profil for this user'})
    }
    return res.json(profile)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
  }
},
}
