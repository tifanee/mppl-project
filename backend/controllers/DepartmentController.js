import Department from '../models/DepartmentModel.js'

export const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find()
        res.json(departments)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id)
        res.json(department)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postDepartment = async (req, res) => {
    const department = new Department(req.body)
    try {
        const addDepartment = await department.save()
        res.status(201).json(addDepartment)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateDepartment = async (req, res) => {
    try {
        const updateDepartment = await Department.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateDepartment)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteDepartment = async (req, res) => {
    try {
        const deleteDepartment = await Department.deleteOne({_id: req.params.id})
        res.status(200).json(deleteDepartment)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}