import Admin from '../models/AdminModel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const getAdmins = (async (req, res) => {
    try {
        const admins = await Admin.find()
        res.json(admins)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export const getAdmintById = (async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id)
        res.json(admin)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

export const register = (async (req, res) => {
    const admin = new Admin(req.body)
    try {
        const salt = await bcrypt.genSalt(10)
        admin.password = await bcrypt.hash(admin.password, salt)

        const register = await admin.save()
        res.status(201).json(register)
    } catch (error) {
        res.status(400).json({message: error.message, error:'Duplicate NIM atau Email'})
    }
})

export const login = (async (req, res) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email })
        
        if(!admin) {
            return res.status(401).send({ message: "Akun tidak ditemukan" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            admin.password
        )
        
        if(!validPassword) {
            return res.status(401).send({ message: "Password salah" });
        }

        if(admin.is_admin === false) {
            return res.status(401).send({ message: "Anda bukan admin" });
        }

        res.status(200).send({ message: admin });
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

export const updateAdmin = async (req, res) => {
    try {
        await Admin.updateOne({_id: req.params.id}, {$set: req.body})
        const admin = await Admin.findById(req.params.id)

        res.status(200).json({admin})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteAdmin = async (req, res) => {
    try {
        const deleteAdmin = await Admin.deleteOne({_id: req.params.id})
        res.status(200).json(deleteAdmin)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}