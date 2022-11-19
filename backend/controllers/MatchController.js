import Match from '../models/MatchModel.js'

export const getMatchs = async (req, res) => {
    try {
        const matchs = await Match.find()
        res.json(matchs)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getMatchById = async (req, res) => {
    try {
        const match = await Match.findById(req.params.id)
        res.json(match)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postMatch = async (req, res) => {
    const match = new Match(req.body)
    try {
        const addMatch = await match.save()
        res.status(201).json(addMatch)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}