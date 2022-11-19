import mongoose from 'mongoose'

const Athlete = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nim: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    sport_team: {
        type: String,
        required: true
    }
})

export default mongoose.model('Athletes', Athlete)