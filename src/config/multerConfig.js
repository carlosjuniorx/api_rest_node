import multer from 'multer'
import {extname, resolve} from 'path'

const aleatorio = () => Math.floor(Math.random()* 10000 + 100000)

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb)=>{
      cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
    },
  })
}
