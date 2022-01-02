import User from "../models/Users"

class UserController {
  async store(req,res){
    try {
      const novoUser = await User.create(req.body)
      return res.json(novoUser)
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })
    }
  }

  async index(req, res){
    try {
      const users = await User.findAll()
      console.log("user id", req.userId)
      console.log("user Email", req.userEmail)
      return res.json(users)
    }catch(error){
      return res.json(null)
    }
  }

  async show(req, res){
    try {
      const user = await User.findByPk(req.params.id)
      return res.json(user)
    } catch (error) {
      return res.json(null)
    }
  }

  async update(req, res){
    try {
      if(!req.params.id){
        return res.status(400).json({
          errors:['ID não enviado.']
        })
      }
      const user = await User.findByPk(req.params.id)
      if(!user){
        return res.status(400).json({
          erros: ['Usuário não exister']
        })
      }
      const atualizado = await user.update(req.body)
      return res.json(atualizado)

    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })
    }
  }

  async delete(req, res){
    try {
      if(!req.params.id){
        return res.status(400).json({
          errors:['ID não enviado.']
        })
      }
      const user = await User.findByPk(req.params.id)
      if(!user){
        return res.status(400).json({
          erros: ['Usuário não exister']
        })
      }
      await user.destroy()
      return res.json(user)

    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })
    }
  }
}

export default new UserController()
