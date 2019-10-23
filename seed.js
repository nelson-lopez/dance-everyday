import { Organizer, Event, Ref_Dance_Style, Venue } from './models'

const eventData = [
    {
        "name": "Zouk and Kompa",
        "date": "11/1/2019",
        "description": "Zouk & Kompa Night Each and Every Friday,Music By: DJ KC, DJ Esalar, DJ Marco, DJ Gino, 10 All Night, Ladies Free Till 1AM.8913 Glenwood Rd Brooklyn NY 11236",
        "dance_style_id": "1"
    },
    {
        "name": "YoZouk",
        "date": "4/8/2020",
        "description": "YoZouk New York Congress, Sheraton New York Times Square Hotel, West 53rd Street,"
    },
    {
        "name": "NYC Zouk Festival",
        "date": "11/4/2019",
        "description": "NYC ZOUK FESTIVAL 2019 FREEDOM EDITION"
    },
    {
        "name": "Outdoor Zouk",
        "date": "10/26/2019",
        "description": "FREE* Outdoor Zouk Party Back to The Old School Pier 45 Hudson River NYC"
    },
    {
        "name": "Brazil Day",
        "date": "8/30/2021",
        "description": "Brazilian Day Little Brazil near West 46th Street"
    },
    {
        "name": "Kompa Tuesday",
        "date": "10/22/2019",
        "description": "KOMPA TUESDAYS!!, Katra Lounge,217 Bowery"
    },
    {
        "name": "Zouk & Social",
        "date": "11/3/2019",
        "description": "Nov 3rd Zouk Class & Social @Las Chicas Locas"
    },
    {
        "name": "NYZ Zouk Party",
        "date": "11/5/2019",
        "description": "NYC Zouk Party @ Solas - FREEZOUKNYC presents NYC ZOUK PARTY with workshops!"
    },
    {
        "name": "Zouk at DanceSport",
        "date": "11/10/2019",
        "description": "DanceSport - Zouk Class & Social @Las Chicas Locas on Nov 10"
    },
    {
        "name": "Zouk NYC Party",
        "date": "11/12/2019",
        "description": "Zouk NYC PARTY on East 9th Street"
    },
    {
        "name": "Zouk Class and Social dance floor",
        "date": "11/19/2019",
        "description": "Zouk Class & Social @Las Chicas Locas"
    },
    {
        "name": "Zouk Party at East Village",
        "date": "11/19/2019",
        "description": "Party at a beautiful East Village bar with plenty of room to Zouk it out to the amazing DJ Power!! It actually ends at 1:30am!!!"
    }
]

const organizerData = [
    {
        "name": "Nelson Lopez",
        "company": "Nelson Inc"
    },
    {
        "name": "Jaabel Lopez",
        "company": "Foolish Passions"
    },
    {
        "name": "Anna Moser",
        "company": "Events We Create LLC"
    }
]
const danceStyleData = [
    {
        "dance_style": "Zouk",
        "dance_style_description": "Brazilian Zouk is a partner dance which began in Brazil during the early 1990s. Brazilian Zouk evolved from the partner dance known as the Lambada. As the Lambada music genre went out of fashion, Lambada dancers turned to Caribbean Zouk (from the francophone, Caribbean Islands) as their music of choice. It was this transition that birthed the dance known as Brazilian Zouk. The term Brazilian Zouk was adopted in order to distinguish the dance style from the musical genre Caribbean Zouk. Nowadays the term Zouk is commonly used to refer to the Brazilian Zouk dance style. The most characteristic feature of Brazilian Zouk is the follower's upper body movements which are led out of axis by intricate leading and following techniques. Other features include body isolations, tilted turns and more recently counter-balance techniques. Brazilian Zouk is a dance with well defined basic steps and rhythmic patterns. The representation of these steps and rhythmic patterns varies depending on the substyle of Zouk. The overall plasticity of the movements and the range of musical genres it is danced to, make Brazilian Zouk a partner dance that caters to creativity and improvisation. Over time, Zouk dancers have experimented and incorporated other styles of music into Zouk, such as R'n'B, Pop, Hip Hop and Contemporary (amongst others)."
    }
]

const venueData = [
    {

    }
]

const seedAll = () => {
    eventData.forEach(async event => await Event.create(event))
    organizerData.forEach(async account => await Organizer.create(account))
    danceStyleData.forEach(async style => await Ref_Dance_Style.create(style))
    // venueData.forEach(async venue => await Venue.create(venue))
}
seedAll()