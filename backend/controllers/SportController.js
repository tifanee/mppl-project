import Sport from '../models/SportModel.js'

export const getSports = async (req, res) => {
    try {
        const sports = await Sport.find()
        res.json(sports)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getSportById = async (req, res) => {
    try {
        const sport = await Sport.findById(req.params.id)
        res.json(sport)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postSport = async (req, res) => {
    const sport = new Sport(req.body)
    try {
        const addSport = await sport.save()
        res.status(201).json(addSport)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateSport = async (req, res) => {
    try {
        const updateSport = await Sport.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateSport)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteSport = async (req, res) => {
    try {
        const deleteSport = await Sport.deleteOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(deleteSport)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}