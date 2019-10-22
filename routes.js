import express from 'express'
import { Router } from 'express'
import { Organizer, Event, Ref_Dance_Style, Venue } from './models'

const getAllEvents = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        try {
            const events = await Event.findAll()
            return res.status(200).json({events})
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

export const eventRouter = Router()
eventRouter.get("/event", getAllEvents)