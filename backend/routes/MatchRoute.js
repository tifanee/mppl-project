import express from 'express'
import {
    getMatchs,
    getMatchById,
    postMatch,
    updateMatch,
    deleteMatch
} from '../controllers/MatchController.js'

const router = express.Router()

router.get('/matchs', getMatchs)
router.get('/matchs/:id', getMatchById)
router.post('/matchs', postMatch)
router.patch('/matchs/:id', updateMatch)
router.delete('/matchs/:id', deleteMatch)

export default router