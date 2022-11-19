import express from 'express'
import { 
    getDepartments, 
    getDepartmentById,
    postDepartment,
    updateDepartment,
    deleteDepartment
} from '../controllers/departmentController.js'

const router = express.Router()

router.get('/departments', getDepartments)
router.get('/departments/:id', getDepartmentById)
router.post('/departments', postDepartment)
router.patch('/departments/:id', updateDepartment)
router.delete('/departments/:id', deleteDepartment)

export default router