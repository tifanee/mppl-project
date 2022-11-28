import express from 'express'
import { 
    getAdmins,
    getAdmintById,
    register,
    login,
    updateAdmin,
    deleteAdmin
} from '../controllers/AdminController.js'

const router = express.Router()

router.get('/admins', getAdmins)
router.get('/admins/:id', getAdmintById)
router.post('/register', register)
router.post('/login', login)
router.patch('/admins/:id', updateAdmin)
router.delete('/admins/:id', deleteAdmin)

export default router