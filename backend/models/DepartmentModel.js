import mongoose from 'mongoose'

const Department = mongoose.Schema({
    dept_name: {
        type: String, 
        required: true
    },
    dept_code: {
        type: String, 
        required: true
    },
    dept_image: {
        type: String, 
        required: true
    },
    gold_medal_count: {
        type: Number, 
        required: true
    },
    silver_medal_count: {
        type: Number, 
        required: true
    },
    bronze_medal_count: {
        type: Number, 
        required: true
    },
    athletes_list: {
        type: Array
    }
})

export default mongoose.model('Departments', Department)