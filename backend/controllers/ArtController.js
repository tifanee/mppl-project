import Art from '../models/ArtModel.js'

export const getArts = async (req, res) => {
    try {
        const arts = await Art.find()
        res.json(arts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getArtById = async (req, res) => {
    try {
        const art = await Art.findById(req.params.id)
        res.json(art)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postArt = async (req, res) => {
    const art = new Art(req.body)
    try {
        const addArt = await art.save()
        res.status(201).json(addArt)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateArt = async (req, res) => {
    try {
        const updateArt = await Art.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateArt)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteArt = async (req, res) => {
    try {
        const deleteArt = await Art.deleteOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(deleteArt)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}