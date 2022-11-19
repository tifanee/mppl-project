import express from 'express'
import {
    getSports,
    getSportById,
    postSport,
    updateSport,
    deleteSport
} from '../controllers/SportController.js'

const router = express.Router()

router.get('/sports', getSports)
router.get('/sports/:id', getSportById)
router.post('/sports', postSport)
router.patch('/sports/:id', updateSport)
router.delete('/sports/:id', deleteSport)

export default router