import mongoose from 'mongoose'

const Contest = mongoose.Schema({
    art_name: {
        type: String,
        required: true
    },
    art_type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    is_finished: {
        type: Boolean,
        default: false
    },
    artists_list: {
        type: Array
    }
})

export default mongoose.model('Contests', Contest)