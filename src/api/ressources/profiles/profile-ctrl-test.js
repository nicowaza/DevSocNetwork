// import Profile from './profile-model'
// import profileService from './profile-service'
// import userService from '../users/user-service'
// import Joi from 'joi'
// import User from '../users/user-model'
//
// export default {
//   async findOne(req, res) {
//     try {
//       // const {id} = req.params
//       console.log({user: req.user.id})
//       const profile = await Profile.findOne({user: req.user.id}).populate('user', ['firstName', 'lastName', 'avatar'])
//       if (!profile) {
//         return res.status(404).json({err: 'Profil not found'})
//       }
//       return res.json(profile)
//   } catch (err) {
//     console.log(err)
//     return res.status(500).send(err)
//   }
// },
//
//   async createAndUpdate(req, res){
//     try {
//       const { value, error } = profileService.validateProfile(req.body);
//       if (error && error.details) {
//         return res.json(error)
//       }
//       const profile = await findOne({user: req.user.id})
//         if(profile){
//           Profile.findOneAndUpdate(
//             { user: req.user.id },
//             { $set: value },
//             { new: true }
//           )
//         return res.json(profile)
//         } else {
//           const profile = await Profile.create(Object.assign({}, value, {user: req.user._id}))
// return res.json(profile);
// }
// } catch (err) {
// console.error(err)
// return res.status(500).send(err);
// }
// }
// }
