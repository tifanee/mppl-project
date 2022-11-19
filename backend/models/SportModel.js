import mongoose from 'mongoose'

const Sport = mongoose.Schema({
    sport_name: {
        type: String,
        required: true
    },
    sport_image: {
        type: String,
        required: true
    },
    participants: {
        type: Array
    }
})

export default mongoose.model('Sports', Sport)