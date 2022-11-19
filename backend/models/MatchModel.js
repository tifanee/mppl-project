import mongoose from 'mongoose'

const Match = mongoose.Schema({
    sport_name: {
        type: String,
        required: true
    },
    dept_name1: {
        type: String,
        required: true
    },
    dept_name2: {
        type: String,
        required: true
    },
    dept_image1: {
        type: String,
        required: true
    },
    dept_image2: {
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
        required: true
    },
    score_result: {
        type: Array,
        required: true
    },

})

export default mongoose.model('Matchs', Match)