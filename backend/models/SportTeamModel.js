import mongoose from 'mongoose'

const Sport_Team = mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    sport_type: {
        type: String,
        required: true
    },
    athletes_list: {
        type: Array
    }
})

export default mongoose.model('Sport_Teams', Sport_Team)