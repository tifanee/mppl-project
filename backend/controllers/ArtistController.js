import Artist from '../models/ArtistModel.js'

export const getArtists = async (req, res) => {
    try {
        const artists = await Artist.find()
        res.json(artists)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id)
        res.json(artist)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postArtist = async (req, res) => {
    const artist = new Artist(req.body)
    try {
        const addArtist = await artist.save()
        res.status(201).json(addArtist)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateArtist = async (req, res) => {
    try {
        await Artist.updateOne({_id: req.params.id}, {$set: req.body})
        const artist = await Artist.findById(req.params.id)

        res.status(200).json({artist})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteArtist = async (req, res) => {
    try {
        const deleteArtist = await Artist.deleteOne({_id: req.params.id})
        res.status(200).json(deleteArtist)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}