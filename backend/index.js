import express from 'express';
import mongoose from 'mongoose'; // Mongoose is a JS library to work with mongoDB
import postsRoute from './routes/postsRoute.js'
import loginRoute from './routes/loginRoute.js'

// Sets Enviroment variables
import dotenv from 'dotenv';
dotenv.config()

const port = process.env.PORT || 5555
const mongoDBURL = process.env.MONGO_DB_URL

import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS POLICY
app.use(cors())

// Base Router to verify server is on
app.get('/', (req, res) => {
    res.send('Service side of Simple Blog');
})

// Using Express Router to easily handle diferent routers
app.use('/posts', postsRoute);
app.use('/login', loginRoute);

// Connecting Mongoose with the target DataBase
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connect to database");
        app.listen(port, () => {
            console.log(`App is listening to port: ${port}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })