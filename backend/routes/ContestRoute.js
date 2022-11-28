import express from 'express'
import {
    getContests,
    getContestById,
    postContest,
    updateContest,
    deleteContest
} from '../controllers/ContestController.js'

const router = express.Router()

router.get('/contests', getContests)
router.get('/contests/:id', getContestById)
router.post('/contests', postContest)
router.patch('/contests/:id', updateContest)
router.delete('/contests/:id', deleteContest)

export default router