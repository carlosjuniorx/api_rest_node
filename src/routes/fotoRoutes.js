import {Router} from 'express'
import loginRequired from '../meddlewares/loginRequired'

import fotoController from '../controllers/FotoController'

const router = new Router()

router.post('/', loginRequired,fotoController.store)

export default router
