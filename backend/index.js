import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import DepartmentRoute from './routes/DepartmentRoute.js'
import AthleteRoute from './routes/AthletesRoute.js'
import SportRoute from './routes/SportRoute.js'
import SportTeamRoute from './routes/SportTeamRoute.js'
import MatchRoute from './routes/MatchRoute.js'

mongoose.connect('mongodb+srv://spiritapp:www123@spiritcluster.jttr6et.mongodb.net/spirit-app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected...'))

const app = express()

app.use(cors())
app.use(express.json())

app.use(DepartmentRoute)
app.use(AthleteRoute)
app.use(SportRoute)
app.use(SportTeamRoute)
app.use(MatchRoute)

app.listen(8000, () => console.log('Server up and running...'))