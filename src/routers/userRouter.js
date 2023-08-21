import express from 'express'
import getUser from '../controllers/user/getUser.js'
import insertUser from '../controllers/user/insertUser.js'
import updateUser from '../controllers/user/updateUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.get = ('/', getUser) //
router.post('/', insertUser)
router.put('/', updateUser)
router.delete('/', deleteUser)

export default router