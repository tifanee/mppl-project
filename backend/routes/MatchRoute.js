import express from 'express'
import {
    getMatchs,
    getMatchById,
    postMatch
} from '../controllers/MatchController.js'

const router = express.Router()

router.get('/matchs', getMatchs)
router.get('/matchs/:id', getMatchById)
router.post('/matchs', postMatch)

export default router