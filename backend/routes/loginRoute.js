import express from 'express'
import dotenv from 'dotenv';
dotenv.config()

const router = express.Router()
const user = process.env.USER
const password = process.env.PASSWORD

router.get(`/`, (req, res) => {
    const valid_user = req.query.user == user
    const valid_password = req.query.password == password

    if (valid_user && valid_password) {
        return res.status(200).send('Welcome Admin')
    }

    return res.status(404).send('Insert the correct inputs to login')
})

export default router