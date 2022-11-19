import Athlete from '../models/AthleteModel.js'
import Department from '../models/DepartmentModel.js'
import Sport_Team from '../models/SportTeamModel.js'
import Sport from '../models/SportModel.js'

export const getAthletes = async (req, res) => {
    try {
        const athletes = await Athlete.find()
        res.json(athletes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getAthleteById = async (req, res) => {
    try {
        const athlete = await Athlete.findById(req.params.id)
        res.json(athlete)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postAthlete = async (req, res) => {
    const athlete = new Athlete(req.body)
    try {
        const addAthlete = await athlete.save()
        await Department.findOneAndUpdate({dept_name: addAthlete.department}, {$push: { athletes_list: addAthlete}})
        await Sport_Team.findOneAndUpdate({department: addAthlete.department, sport_type: addAthlete.sport_team}, {$push: { athletes_list: addAthlete}})
        res.status(201).json(addAthlete)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateAthlete = async (req, res) => {
    try {
        const updateAthlete = await Athlete.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateAthlete)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteAthlete = async (req, res) => {
    try {
        const deleteAthlete = await Athlete.deleteOne({_id: req.params.id})
        res.status(200).json(deleteAthlete)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}