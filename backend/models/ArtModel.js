import mongoose from 'mongoose'

const Art = mongoose.Schema({
    art_name: {
        type: String,
        required: true
    },
    art_image: {
        type: String,
        required: true
    },
    participants: {
        type: Array
    }
})

export default mongoose.model('Arts', Art)