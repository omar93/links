import controller from '../controllers/registerUserController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.index)
router.post('/', controller.indexPost)


export default router