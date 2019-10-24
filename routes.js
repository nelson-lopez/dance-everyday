import express from 'express';
import { Router } from 'express';
import { Organizer, Event, Ref_Dance_Style, Venue } from './models';

//-------- C.R.U.D --------
//-------- Create ---------

const createEvent = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        try {
          const create = await Event.create(req.body)
          return res.json(create)
        } catch (error) { return res.status(500).send(error.message) }  
    }

  const createOrganizer = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        try {
          const create = await Organizer.create(req.body)
          return res.json(create)
        } catch (error) { return res.status(500).send(error.message) }  
    }
  
    const createVenue = async (
      /**@type {express.Request} */ req,
      /**@type {express.Response} */ res) => {
          try {
            const create = await Venue.create(req.body)
            return res.json(create)
          } catch (error) { return res.status(500).send(error.message) }  
      }

//-------- Read  -------

const getAllEvents = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        try {
            const data = await Event.findAll({ 
                include: { model: Organizer },
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC']
                ] 
            })
            return res.status(200).json({ data })
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

  const getAllOrganizers = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        try {
            const data = await Organizer.findAll({ 
                include: { model: Event },
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC']
                ] 
            })
            return res.status(200).json({ data })
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
    const getAllVenues = async (
      /**@type {express.Request} */ req,
      /**@type {express.Response} */ res) => {
          try {
              const data = await Venue.findAll({ 
                  include: { model: Event },
                  order: [
                      ['id', 'DESC'],
                      ['name', 'ASC']
                  ] 
              })
              return res.status(200).json({ data })
          } catch (error) {
              return res.status(500).send(error.message)
          }
      }

//========================== by ID

const getEventById = async (
  /**@type {express.Request} */ req,
  /**@type {express.Response} */ res
) => {
  try {
    const data = await Event.findByPk(req.params.id);
    return res.json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getVenueById = async (
  /**@type {express.Request} */ req,
  /**@type {express.Response} */ res
) => {
  try {
    const data = await Venue.findByPk(req.params.id);
    return res.json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getOrganizerById = async (
  /**@type {express.Request} */ req,
  /**@type {express.Response} */ res
) => {
  try {
    const data = await Organizer.findByPk(req.params.id);
    return res.json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//-------- Updates ---------

const updateEvent = async (
  /**@type {express.Request} */ req,
  /**@type {express.Response} */ res
) => {
  try {
    let id = req.params.id;
    const edit = await Event.update(req.body, {
      where: { id: id }
    });
    if (edit) {
      let updated = await Event.findByPk(id);
      return res.json(updated);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateVenue = async (
  /**@type {express.Request} */ req,
  /**@type {express.Response} */ res
) => {
  try {
    let id = req.params.id;
    const edit = await Venue.update(req.body, {
      where: { id: id }
    });
    if (edit) {
      let updated = await Venue.findByPk(id);
      return res.json(updated);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateOrganizer = async (
  /**@type {express.Request} */ req,
  /**@type {express.Response} */ res
) => {
  try {
    let id = req.params.id;
    const edit = await Organizer.update(req.body, {
      where: { id: id }
    });
    if (edit) {
      let updated = await Organizer.findByPk(id);
      return res.json(updated);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//-------- Deletes ---------

const deleteEvent = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        let id = req.params.id
        try {
            const destroy = await Event.destroy({ where: { id: id } })
            if (destroy !== 0) {
                return res.json(`The deed has been done \n event id:${id} destroyed (ﾉ-.-)ﾉ….((((((((((((●~* ( >_<)`)
            }
        } catch (error) { return res.status(500).send(error.message) }  
    }

  const deleteVenue = async (
    /**@type {express.Request} */ req,
    /**@type {express.Response} */ res) => {
        let id = req.params.id
        try {
            const destroy = await Venue.destroy({ where: { id: id } })
            if (destroy !== 0) {
                return res.json(`The deed has been done \n venue id:${id} is now on fire !ヽ(ﾒ｀⌒´)θ☆===========(((旦~~`)
            }
        } catch (error) { return res.status(500).send(error.message) }  
    }

    const deleteOrganizer = async (
      /**@type {express.Request} */ req,
      /**@type {express.Response} */ res) => {
          let id = req.params.id
          try {
              const destroy = await Organizer.destroy({ where: { id: id } })
              if (destroy !== 0) {
                  return res.json(`The deed has been done \n organizer id:${id} has been downed >=> !?! (Дﾟ≡ﾟДﾟ) ?!!`)
              }
          } catch (error) { return res.status(500).send(error.message) }  
      }
  


export const superRouter = Router()
superRouter.post("/events", createEvent)
superRouter.get("/events", getAllEvents)
superRouter.get("/events/:id", getEventById)
superRouter.put("/events/:id", updateEvent)
superRouter.delete("/events/:id", deleteEvent)

superRouter.post("/venues", createVenue)
superRouter.get("/venues", getAllVenues)
superRouter.get("/venues/:id", getVenueById)
superRouter.put("/venues/:id", updateVenue)
superRouter.delete("/venues/:id", deleteVenue)

superRouter.post("/organizers", createOrganizer)
superRouter.get("/organizers", getAllOrganizers)
superRouter.get("/organizers/:id", getOrganizerById)
superRouter.put("/organizers/:id", updateOrganizer)
superRouter.delete("/organizers/:id", deleteOrganizer)