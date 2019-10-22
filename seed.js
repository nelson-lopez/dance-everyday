import { Organizer, Event, Ref_Dance_Style, Venue } from './models'

const eventData = [
    {
        "event_name": "Zouk and Kompa",
        "event_date": "11/1/2019",
        "event_description": "Zouk & Kompa Night Each and Every Friday,Music By: DJ KC, DJ Esalar, DJ Marco, DJ Gino, 10 All Night, Ladies Free Till 1AM.8913 Glenwood Rd Brooklyn NY 11236"
    },
    {
        "event_name": "YoZouk",
        "event_date": "4/8/2020",
        "event_description": "YoZouk New York Congress, Sheraton New York Times Square Hotel, West 53rd Street,"
    },
    {
        "event_name": "NYC Zouk Festival",
        "event_date": "11/4/2019",
        "event_description": "NYC ZOUK FESTIVAL 2019 FREEDOM EDITION"
    },
    {
        "event_name": "Outdoor Zouk",
        "event_date": "10/26/2019",
        "event_description": "FREE* Outdoor Zouk Party Back to The Old School Pier 45 Hudson River NYC"
    },
    {
        "event_name": "Brazil Day",
        "event_date": "8/30/2021",
        "event_description": "Brazilian Day Little Brazil near West 46th Street"
    },
    {
        "event_name": "Kompa Tuesday",
        "event_date": "10/22/2019",
        "event_description": "KOMPA TUESDAYS!!, Katra Lounge,217 Bowery"
    },
    {
        "event_name": "Zouk & Social",
        "event_date": "11/3/2019",
        "event_description": "Nov 3rd Zouk Class & Social @Las Chicas Locas"
    },
    {
        "event_name": "NYZ Zouk Party",
        "event_date": "11/5/2019",
        "event_description": "NYC Zouk Party @ Solas - FREEZOUKNYC presents NYC ZOUK PARTY with workshops!"
    },
    {
        "event_name": "Zouk at DanceSport",
        "event_date": "11/10/2019",
        "event_description": "DanceSport - Zouk Class & Social @Las Chicas Locas on Nov 10"
    },
    {
        "event_name": "Zouk NYC Party",
        "event_date": "11/12/2019",
        "event_description": "Zouk NYC PARTY on East 9th Street"
    },
    {
        "event_name": "Zouk Class and Social dance floor",
        "event_date": "11/19/2019",
        "event_description": "Zouk Class & Social @Las Chicas Locas"
    },
    {
        "event_name": "Zouk Party at East Village",
        "event_date": "11/19/2019",
        "event_description": "Party at a beautiful East Village bar with plenty of room to Zouk it out to the amazing DJ Power!! It actually ends at 1:30am!!!"
    }
]

const organizerData = [
    {
        "organizer_name": "Nelson Lopez",
        "company": "Nelson Inc"
    },
    {
        "organizer_name": "Jaabel Lopez",
        "company": "Foolish Passions"
    },
    {
        "organizer_name": "Anna Moser",
        "company": "Events We Create LLC"
    }
]
const danceStyleData = [
    {
        "dance_style": "Zouk",
        "dance_style_description": ""
    }
]



const seedAll = () => {
    eventData.forEach(async event => await Event.create(event))
    organizerData.forEach(async account => await Organizer.create(account))
    danceStyleData.forEach(async style => await Ref_Dance_Style.create(style))

}

seedAll()