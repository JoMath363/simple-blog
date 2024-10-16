import express from 'express'
import { Post } from '../models/postModel.js';

const router = express.Router()

// Router for save a new Post
router.post('/', async (req, res) => {
    try {
        // Verify if all the requested params were passed
        if (
            !req.body.title ||
            !req.body.content ||
            !req.body.likes ||
            !req.body.dislikes
        ) {
            return res.status(400).send({
                message: "Send all required fields: title, content, likes, dislikes"
            })
        }

        // Create new obj with req params
        const newPost = {
            title: req.body.title,
            content: req.body.content,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
        }

        // Add it to the database
        const post = await Post.create(newPost)

        // Return the saved post
        return res.status(201).send(post)
    } catch (error) {
        console.log(error.message);
        response.stats(500).send({ message: error.message });
    }
})

// Router for Get All Posts
router.get('', async (req, res) => {
    try {
        // Find all posts in the database
        const posts = await Post.find({});

        // Return it as Json
        return res.status(200).json({
            count: posts.length,
            data: posts
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500).send({ message: error.message })
    }
})

// Router for Get Target Post By Id
router.get('/:id', async (req, res) => {
    try {
        // Get id from url request params
        const { id } = req.params

        // Find post with correponding id in the database
        const post = await Post.findById(id);

        // Return it as Json
        return res.status(200).json(post)

    } catch (error) {
        console.log(message.error)
        return res.status(500).send({ message: error.message })
    }
})

// Router for Update a Post by its Id 
router.put('/:id', async (req, res) => {
    // Verify if all the requested params were passed
    if (
        !req.body.title ||
        !req.body.content ||
        !req.body.likes ||
        !req.body.dislikes
    ) {
        return res.status(400).send({
            message: "Send all required fields: title, content, likes, dislikes"
        })
    }

    // Get id from url request params
    const { id } = req.params

    // Find post with correponding id and update it with the new data
    const result = await Post.findByIdAndUpdate(id, req.body);

    // Return Not Found if id not in database
    if (!result) {
        return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).send({ message: 'Post Updated successfully' })
})

// Router for Delete a Post by its Id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const result = await Post.findByIdAndDelete(id)

        if (!result){
            res.status(404).json({message: 'Post not Found'})
        }

        return res.status(200).json({message: "Post deleted sucessfully"})

    } catch (error) {
        console.log(error.message)
        return res.status(500).send({ message: error.message })
    }
})

export default router