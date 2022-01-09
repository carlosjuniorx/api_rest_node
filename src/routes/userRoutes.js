import {Router} from 'express'
import loginRequired from '../meddlewares/loginRequired'
import userController from '../controllers/UserController'

const router = new Router()

router.post('/', loginRequired,userController.store)
router.put('/:id',loginRequired, userController.update)
router.delete('/:id',loginRequired, userController.delete)

export default router
