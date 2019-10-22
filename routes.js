import express from 'express';
import { Router } from 'express';
import { Organizer, Event, Ref_Dance_Style, Venue } from './models';

//-------- Gets all events -------

const getAllEvents = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        try {
            const events = await Event.findAll({ include: { model: Organizer } })
            return res.status(200).json({ events })
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

//------- Gets event by Primary Keys ------

const getEventById = async (
  /**@type {express.Request} */ req,
  /**@type {express.Response} */ res
) => {
  try {
    const event = await Event.findByPk(req.params.id);
    return res.json(event);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//-------- Updates event ---------

const updateEvent = async (
  /**@type {express.Request} */ req,
  /**@type {express.Response} */ res
) => {
  try {
    let id = req.params.id;
    const editEvent = await Event.update(req.body, {
      where: { id: id }
    });
    if (editEvent) {
      let updated = await Event.findByPk(id);
      return res.json(updated);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//-------- Deletes event by id ---------

const deleteEvent = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        let id = req.params.id
        try {
            const destroy = await Event.destroy({ where: { id: id } })
            if (destroy !== 0) {
                return res.json(`The deed has been done \n event id:${id} destroyed >===> (˵¯͒࿄¯͒˵)`)
            }
        } catch (error) { return res.status(500).send(error.message) }  
    }

//-------- Creates event ---------

const createEvent = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        try{
            const newEvent = await Event.create(req.body)
            return res.json(newEvent)
        } catch (error) { return res.status(500).send(error.message) }  
    }

export const eventRouter = Router()
eventRouter.get("/events", getAllEvents)
eventRouter.get("/events/:id", getEventById)
eventRouter.put("/events/:id", updateEvent)
eventRouter.delete("/events/:id", deleteEvent)
eventRouter.post("/events", createEvent)