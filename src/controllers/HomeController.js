import Aluno from '../models/Aluno'

class HomeController {
  async index(req,res){
    const novoAluno = await Aluno.create({
      nome: 'Marciano',
      sobrenome: 'Martes',
      email: 'marciano@gmail.com',
      idade: 112,
      peso: 200,
      altura: 1.80,
    })
    res.json(novoAluno)
  }
}

export default new HomeController()
