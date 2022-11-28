import mongoose from 'mongoose'

const Article = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    author: {
        type: String, 
        required: true
    },
    body: {
        type: String, 
        required: true
    },
    cover_image: {
        type: String,
        required: true
    },
    gallery_image: {
        type: String
    },
    is_published: {
        type: Boolean, 
        default: false
    },
    created_date: {
        type: String, 
        required: true
    },
    published_date: {
        type: String, 
        required: true
    }
})

export default mongoose.model('Articles', Article)