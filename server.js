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

app.get("/test", (req,res) => {
    return res.header(200).send({greetings: "You are successfully at the Dance Everyday API"})
})

app.listen(PORT)

console.log('hand-rolled express server listing on Port ::', PORT)
