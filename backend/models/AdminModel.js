import mongoose from 'mongoose'

const Admin = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    nim: {
        type: String, 
        required: true,
        unique: true
    },
    department: {
        type: String, 
        required: true
    },
    batch: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    is_superAdmin: {
        type: Boolean,
        default: false
    },
    is_admin: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Admins', Admin)