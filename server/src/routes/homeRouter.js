import controller from '../controllers/homeController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.index)


export default router