export const isUser = (req, res, next) => {
  if(!req.user){
    return res.json({err: 'unauthorized, not a user'})
  }
  next()
}
