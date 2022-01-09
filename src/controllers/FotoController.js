import multer from 'multer'
import multerConfig from '../config/multerConfig'
import Foto from '../models/Foto'

const upload = multer(multerConfig).single('foto')

class FotoController {
  store(req,res){
    return upload(req, res, async (error)=>{
      if(error){
        return res.status(400).json({
          errors: [error.code],
        })
      }
      try {
        const {aluno_id} = req.body
        const {originalname, filename} = req.file
        console.log('Este é o ID do aluno: '+aluno_id)
        const foto = await Foto.create({originalname, filename, aluno_id})

        return res.json(foto)
      } catch (error) {
        return res.status(400).json({
          erros:['Aluno inexistente']
        })
      }
    })
  }
}

export default new FotoController()
