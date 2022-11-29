import Student from '../models/StudentModel.js'
import Match from '../models/MatchModel.js'

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        res.json(student)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postStudent = async (req, res) => {
    const student = new Student(req.body)
    try {
        const addStudent = await student.save()
        await Match.findOneAndUpdate({_id: addStudent.match_id}, {$push: { comments_list: addStudent}})

        res.status(201).json(addStudent)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateStudent = async (req, res) => {
    try {
        const updateStudent = await Student.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateStudent)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const deleteStudent = await Student.deleteOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(deleteStudent)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}