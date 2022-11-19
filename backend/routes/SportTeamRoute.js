import express from 'express'
import {
    getSportTeams,
    getSportTeamById,
    postSportTeam,
    updateSportTeam,
    deleteSportTeam
} from '../controllers/SportTeamController.js'

const router = express.Router()

router.get('/sport-teams', getSportTeams)
router.get('/sport-teams/:id', getSportTeamById)
router.post('/sport-teams', postSportTeam)
router.patch('/sport-teams/:id', updateSportTeam)
router.delete('/sport-teams/:id', deleteSportTeam)

export default router