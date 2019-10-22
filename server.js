import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { eventRouter } from './routes'

const app = express()
const PORT = 9876

app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use("/api", eventRouter)

app.get("/test", (req, res) => {
    return res.header(200).send({ SuccessMessage: "You are successfully connected to the Dance Everyday API" })
})

app.get("/", (req, res) => {
    return res.header(200).send(
        {
          BasicApiDoc:  "Welcome to the Dance Everyday!\nTo start using Dance Everyday's api, you'll have to use the /api end point \n/api/events will give you all events currently in the api. \n It is also the CRUD endpoint."
        }
    )
})

app.listen(PORT)

console.log('Express server listing on Port :: ', PORT)
