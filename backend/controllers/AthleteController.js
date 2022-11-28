import Athlete from '../models/AthleteModel.js'
import Department from '../models/DepartmentModel.js'
import Sport_Team from '../models/SportTeamModel.js'
import Match from '../models/MatchModel.js'

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

        const find = await Sport_Team.find({department: addAthlete.department, sport_type: addAthlete.sport_team})
        if(find.length !== 0) {
            await Sport_Team.findOneAndUpdate({department: addAthlete.department, sport_type: addAthlete.sport_team}, {$push: { athletes_list: addAthlete}})
        } else {
            const sportTeam = new Sport_Team({department: addAthlete.department, sport_type: addAthlete.sport_team}, {$push: { athletes_list: addAthlete}})
            await sportTeam.save()

            await Sport_Team.findOneAndUpdate({department: addAthlete.department, sport_type: addAthlete.sport_team}, {$push: { athletes_list: addAthlete}})
        }

        res.status(201).json({addAthlete})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateAthlete = async (req, res) => {
    try {
        await Athlete.updateOne({_id: req.params.id}, {$set: req.body})
        const athlete = await Athlete.findById(req.params.id)

        await Department.updateOne({dept_name: athlete.department, 'athletes_list._id': athlete._id}, {$set: {
            'athletes_list.$.name': athlete.name,
            'athletes_list.$.nim': athlete.nim,
            'athletes_list.$.image': athlete.image,
            'athletes_list.$.department': athlete.department,
            'athletes_list.$.batch': athlete.batch,
            'athletes_list.$.sport_team': athlete.sport_team
        }})
        const department = await Department.find({dept_name: athlete.department})

        await Sport_Team.updateOne({department: athlete.department, sport_type: athlete.sport_team, 'athletes_list._id': athlete._id}, {$set: {
            'athletes_list.$.name': athlete.name,
            'athletes_list.$.nim': athlete.nim,
            'athletes_list.$.image': athlete.image,
            'athletes_list.$.department': athlete.department,
            'athletes_list.$.batch': athlete.batch,
            'athletes_list.$.sport_team': athlete.sport_team
        }})
        const sport_team = await Department.find({dept_name: athlete.department})
        

        res.status(200).json({athlete, department, sport_team}) 
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteAthlete = async (req, res) => {
    try {
        const athlete = await Athlete.findById(req.params.id)

        await Department.findOneAndUpdate({dept_name: athlete.department}, {$pull: { athletes_list: { _id: athlete._id}}})
        const department = await Department.find({dept_name: athlete.department})

        await Sport_Team.findOneAndUpdate({department: athlete.department, sport_type: athlete.sport_team}, {$pull: { athletes_list: { _id: athlete._id}}})
        const sport_team = await Sport_Team.find({department: athlete.department, sport_type: athlete.sport_team})

        const deleteAthlete = await Athlete.deleteOne({_id: req.params.id})
        
        res.status(200).json({deleteAthlete, department, sport_team})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}