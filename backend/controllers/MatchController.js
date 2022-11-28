import Match from '../models/MatchModel.js'
import Sport_Team from '../models/SportTeamModel.js'
import Department from '../models/DepartmentModel.js'

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

        const dept1 = await Department.find({dept_name: addMatch.dept_name1})
        const dept2 = await Department.find({dept_name: addMatch.dept_name2})
        const team1 = await Sport_Team.find({department: addMatch.dept_name1, sport_type: addMatch.sport_name})
        const team2 = await Sport_Team.find({department: addMatch.dept_name2, sport_type: addMatch.sport_name})

        await Match.updateOne({_id: addMatch._id}, {$set: {dept_image1: dept1[0].dept_image, dept_image2: dept2[0].dept_image, athletes_team1: team1[0].athletes_list, athletes_team2: team2[0].athletes_list}})
        const addMatchUpdate = await Match.findOne({_id: addMatch._id})

        res.status(201).json( addMatchUpdate )
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateMatch = async (req, res) => {
    try {
        const updateMatch = await Match.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateMatch)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteMatch = async (req, res) => {
    try {
        const deleteMatch = await Match.deleteOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(deleteMatch)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}