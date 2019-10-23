import { Organizer, Event, Ref_Dance_Style, Venue } from './models'

const reset = async () => {
    await Organizer.sync({force:true})
    await Event.sync({force:true})
    await Ref_Dance_Style.sync({force:true})
    await Venue.sync({force:true})
    process.exit()
}
reset()