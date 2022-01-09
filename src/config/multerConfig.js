import multer from 'multer'
import {extname} from 'path'

const aleatorio = () => Math.floor(Math.random()* 10000 + 100000)

export default {
  fileFilter: (req, file, cb)=>{
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'))
    }
    return cb(null, true)
  },
  storage: multer.diskStorage({
    destination: (req, file, cb)=>{
      cb(null, 'uploads/images')
    },
    filename: (req, file, cb)=>{
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
    },
  })
}
