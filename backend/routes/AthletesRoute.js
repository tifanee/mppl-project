import express from 'express'
import {
    getAthletes,
    getAthleteById,
    postAthlete,
    updateAthlete,
    deleteAthlete
} from '../controllers/AthleteController.js'

const router = express.Router()

router.get('/athletes', getAthletes)
router.get('/athletes/:id', getAthleteById)
router.post('/athletes', postAthlete)
router.patch('/athletes/:id', updateAthlete)
router.delete('/athletes/:id', deleteAthlete)

export default router