import User from "../models/Users"

class UserController {
  async store(req,res){
    try {
      const novoUser = await User.create(req.body)
      const {id, nome, email} = novoUser
      return res.json({id, nome, email})
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })
    }
  }

  async index(req, res){
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
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
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null)
    }
  }

  async update(req, res){
    try {


      const user = await User.findByPk(req.userId)
      if(!user){
        return res.status(400).json({
          erros: ['Usuário não exister']
        })
      }
      const atualizado = await user.update(req.body)
      const { id, nome, email } = atualizado;
      return res.json({ id, nome, email })

    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })
    }
  }

  async delete(req, res){
    try {

      const user = await User.findByPk(req.params.id)
      if(!user){
        return res.status(400).json({
          erros: ['Usuário não exister']
        })
      }
      await user.destroy()
      return res.json(null)

    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })
    }
  }
}

export default new UserController()
