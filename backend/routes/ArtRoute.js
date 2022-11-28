import express from 'express'
import {
    getArts,
    getArtById,
    postArt,
    updateArt,
    deleteArt
} from '../controllers/ArtController.js'

const router = express.Router()

router.get('/arts', getArts)
router.get('/arts/:id', getArtById)
router.post('/arts', postArt)
router.patch('/arts/:id', updateArt)
router.delete('/arts/:id', deleteArt)

export default router