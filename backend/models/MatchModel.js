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
        type: String
    },
    dept_image2: {
        type: String
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
    score_result: {
        type: Array,
        default: [0,0]
    },
    athletes_team1: {
        type: Array
    },
    athletes_team2: {
        type: Array
    },
    comment_list: {
        type: Array
    }
})

export default mongoose.model('Matchs', Match)