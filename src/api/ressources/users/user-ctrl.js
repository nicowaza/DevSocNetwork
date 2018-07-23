import userService from './user-service'
import User from './user-model'
import bcrypt from 'bcryptjs'
import gravatar from 'gravatar'

export default {
  async register(req, res) {
    try {
      const { value, error } = userService.validateRegister(req.body)
      if (error) {
        return res.status(400).json(error)
      }
      const encryptedPass = userService.encryptedPassword(value.password)
      //GRAVATAR
      const avatar = gravatar.url(req.body.email, {
        s: '200', //size
        r: 'r',//rating
        d: 'mm'//default
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
    }catch (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    return res.json(value)
    console.log(res.json(value))
  }
}
