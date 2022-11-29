import mongoose from 'mongoose'

const Student = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    match_id: {
        type: String
    }
})

export default mongoose.model('Students', Student)