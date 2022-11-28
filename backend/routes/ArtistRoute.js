import express from 'express'
import {
    getArtists,
    getArtistById,
    postArtist,
    updateArtist,
    deleteArtist
} from '../controllers/ArtistController.js'

const router = express.Router()

router.get('/artists', getArtists)
router.get('/artists/:id', getArtistById)
router.post('/artists', postArtist)
router.patch('/artists/:id', updateArtist)
router.delete('/artists/:id', deleteArtist)

export default router