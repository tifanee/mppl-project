import Contest from '../models/ContestModel.js'

export const getContests = async (req, res) => {
    try {
        const contests = await Contest.find()
        res.json(contests)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getContestById = async (req, res) => {
    try {
        const contest = await Contest.findById(req.params.id)
        res.json(contest)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postContest = async (req, res) => {
    const contest = new Contest(req.body)
    try {
        const addContest = await contest.save()
        res.status(201).json( addContest )
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateContest = async (req, res) => {
    try {
        const updateContest = await Contest.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateContest)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteContest = async (req, res) => {
    try {
        const deleteContest = await Contest.deleteOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(deleteContest)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}