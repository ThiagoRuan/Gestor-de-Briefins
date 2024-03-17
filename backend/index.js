import cors from 'cors'
import express from 'express'
import brfRoutes from './routes/briefins.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/', brfRoutes)

app.listen(3333)