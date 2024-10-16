import mongoose from "mongoose"

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            required: true
        },
        dislikes: {
            type: Number,
            required: true
        }
    }

)

export const Post = mongoose.model('Post', postSchema )