import Posts from './posts-model'
import Joi from 'joi'
import postsService from './posts-service'
import userService from '../users/user-service'
import User from '../users/user-model'
import mongoose from 'mongoose'


export default {
  async addPosts(req, res){
    try {
      const { value, error } = postsService.validatePosts(req.body)
      if(error && error.details){
        return res.status(400).json(error)
      }

      const posts = await Posts.create((value), {user: req.user._id})
      return res.json(posts);
    } catch (err) {
      console.error(err)
      return res.status(500).send(err);
    }
  },

  async findAllPosts(req, res){
    try{
      const posts = await Posts.find({})
      return res.json(posts)
    }catch (err) {
      console.log(err)
      return res.status(404).send(err)
    }
  },


}
