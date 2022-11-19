import Sport_Team from '../models/SportTeamModel.js'
import Sport from '../models/SportModel.js'

export const getSportTeams = async (req, res) => {
    try {
        const sportTeams = await Sport_Team.find()
        res.json(sportTeams)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getSportTeamById = async (req, res) => {
    try {
        const sportTeam = await Sport_Team.findById(req.params.id)
        res.json(sportTeam)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postSportTeam = async (req, res) => {
    const sportTeam = new Sport_Team(req.body)
    try {
        const addSportTeam = await sportTeam.save()
        await Sport.findOneAndUpdate({sport_name: addSportTeam.sport_type}, {$push: { participants: addSportTeam}})
        res.status(201).json(addSportTeam)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateSportTeam = async (req, res) => {
    try {
        const updateSportTeam = await Sport_Team.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateSportTeam)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteSportTeam = async (req, res) => {
    try {
        const deleteSportTeam = await Sport_Team.deleteOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(deleteSportTeam)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}