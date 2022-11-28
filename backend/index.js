import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import dotenv from 'dotenv'
import colors from 'colors'
import path, {dirname} from 'path'
import { fileURLToPath  } from 'url'

import connectDB from './config/Database.js'
dotenv.config()

import DepartmentRoute from './routes/DepartmentRoute.js'
import AthleteRoute from './routes/AthletesRoute.js'
import ArtistRoute from './routes/ArtistRoute.js'
import SportRoute from './routes/SportRoute.js'
import ArtRoute from './routes/ArtRoute.js'
import SportTeamRoute from './routes/SportTeamRoute.js'
import MatchRoute from './routes/MatchRoute.js'
import ContestRoute from './routes/ContestRoute.js'
import ArticleRoute from './routes/ArticleRoute.js'
import Admin from './routes/AdminRoute.js'

const app = express()
connectDB()

app.use(cors())
app.use(express.json())

app.use('/api', DepartmentRoute)
app.use('/api', AthleteRoute)
app.use('/api', ArtistRoute)
app.use('/api', ArtRoute)
app.use('/api', SportRoute)
app.use('/api', SportTeamRoute)
app.use('/api', MatchRoute)
app.use('/api', ContestRoute)
app.use('/api', ArticleRoute)
app.use('/api', Admin)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => 
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    )
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.get('/', (req, res) => {
    res.send('APP IS RUNNING...')
})

app.listen(process.env.APP_PORT, () => console.log('Server up and running...'))