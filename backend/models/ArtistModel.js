import mongoose from 'mongoose'

const Artist = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nim: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    department: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    artist_in: {
        type: String,
        required: true
    }
})

export default mongoose.model('Artists', Artist)