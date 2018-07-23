import userService from './user-service'
import User from './user-model'
import bcrypt from 'bcryptjs'
import gravatar from 'gravatar'
import jwt from '../../helpers/jwt'

export default {
  async register(req, res) {
    try {
      const {value, error} = userService.validateRegister(req.body)
      if (error) {
        return res.status(400).json(error)
      }
      const encryptedPass = userService.encryptedPassword(value.password)
      //GRAVATAR
      const avatar = gravatar.url(req.body.email, {
        s: '200', //size
        r: 'r', //rating
        d: 'mm' //default
      })
      const user = await User.create({
        email: value.email,
        userName: value.userName,
        firstName: value.firstName,
        lastName: value.lastName,
        password: encryptedPass,
        avatar: avatar,
        date: value.date
      })
      return res.json(user)
      console.log(user)
    } catch (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    return res.json(value)
    console.log(res.json(value))
  },

  async login(req, res) {
    try {
      const {value, error} = userService.validateLogin(req.body)
      if (error) {
        return res.status(400).json(error)
      }
      const user = await User.findOne({email: value.email})
      if (!user) {
        return res.status(404).json({err: "User not found"})
      }
      const authenticated = userService.comparePassword(value.password, user.password)
      if (!authenticated) {
        return res.status(401).json({err: "Invalid password"})
      }
      const token = jwt.issue({
        id: user._id
      }, '3h')
      return res.json(token)
    } catch (err) {
      console.error(err)
      return res.status(500).send(err)
    }
  },

  authenticate(req, res) {
    return res.json({
    id: req.user.id,
    userName: req.user.userName,
    email: req.user.email
    })
  }
}
