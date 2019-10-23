import { Organizer, Event, Ref_Dance_Style, Venue } from './models'

const eventData = [
    {
        "name": "Zouk and Kompa",
        "date": "11/1/2019",
        "description": "Zouk & Kompa Night Each and Every Friday,Music By: DJ KC, DJ Esalar, DJ Marco, DJ Gino, 10 All Night, Ladies Free Till 1AM.8913 Glenwood Rd Brooklyn NY 11236",
        "organizerId": 1,
        "danceStyleId": 1,
        "venueId": 2
    },
    {
        "name": "YoZouk",
        "date": "4/8/2020",
        "description": "YoZouk New York Congress, Sheraton New York Times Square Hotel, West 53rd Street,",
        "organizerId": 1,
        "danceStyleId": 1,
        "venueId": 4
    },
    {
        "name": "NYC Zouk Festival",
        "date": "11/4/2019",
        "description": "NYC ZOUK FESTIVAL 2019 FREEDOM EDITION",
        "organizerId": 2,
        "danceStyleId": 1,
        "venueId": 1
    },
    {
        "name": "Outdoor Zouk",
        "date": "10/26/2019",
        "description": "FREE* Outdoor Zouk Party Back to The Old School Pier 45 Hudson River NYC",
        "organizerId": 1,
        "danceStyleId": 1,
        "venueId": 3
    },
    {
        "name": "Brazil Day",
        "date": "8/30/2021",
        "description": "Brazilian Day Little Brazil near West 46th Street",
        "organizerId": 1,
        "danceStyleId": 2,
        "venueId": 3
    },
    {
        "name": "Kompa Tuesday",
        "date": "10/22/2019",
        "description": "KOMPA TUESDAYS!!, Katra Lounge,217 Bowery",
        "organizerId": 1,
        "danceStyleId": 3,
        "venueId": 1
    },
    {
        "name": "Zouk & Social",
        "date": "11/3/2019",
        "description": "Nov 3rd Zouk Class & Social @Las Chicas Locas",
        "organizerId": 1,
        "danceStyleId": 1,
        "venueId": 2
    },
    {
        "name": "NYZ Zouk Party",
        "date": "11/5/2019",
        "description": "NYC Zouk Party @ Solas - FREEZOUKNYC presents NYC ZOUK PARTY with workshops!",
        "organizerId": 3,
        "danceStyleId": 1,
        "venueId": 1
    },
    {
        "name": "Zouk at DanceSport",
        "date": "11/10/2019",
        "description": "DanceSport - Zouk Class & Social @Las Chicas Locas on Nov 10",
        "organizerId": 2,
        "danceStyleId": 1,
        "venueId": 4
    },
    {
        "name": "Zouk NYC Party",
        "date": "11/12/2019",
        "description": "Zouk NYC PARTY on East 9th Street",
        "organizerId": 2,
        "danceStyleId": 1,
        "venueId": 1
    },
    {
        "name": "Zouk Class and Social dance floor",
        "date": "11/19/2019",
        "description": "Zouk Class & Social @Las Chicas Locas",
        "organizerId": 2,
        "danceStyleId": 1,
        "venueId": 4
    },
    {
        "name": "Zouk Party at East Village",
        "date": "11/19/2019",
        "description": "Party at a beautiful East Village bar with plenty of room to Zouk it out to the amazing DJ Power!! It actually ends at 1:30am!!!",
        "organizerId": 3,
        "danceStyleId": 1,
        "venueId": 1
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
    },
    {
        "dance_style": "Lamba Zouk",
        "dance_style_description": "Lamba Zouk or formerly known as Lambada is a dance from Pará, Brazil. The dance became internationally popular in the 1980s, especially in the Philippines, Latin America and Caribbean countries. It has adopted aspects of dances such as forró, salsa, merengue, maxixe and the carimbó. Lambada is generally a partner dance. The dancers generally dance with arched legs, with the steps being from side to side, turning or even swaying, and in its original form never front to back, with a pronounced movement of the hips. At the time when the dance became popular, short skirts for women were in fashion and men wore long trousers, and the dance has become associated with such clothing, especially for women wearing short skirts that swirl up when the woman spins around, typically revealing 90s-style thong underwear."
    },
    {
        "dance_style": "Kyzomba",
        "dance_style_description": "Semba has been danced in the 1950s in Angola. In the 1990s, when the actual kizomba music got more and more popular, Angolan semba dancers started to adapt their semba steps according to the tempo and flavour of the Kizomba beats.[4] The Kizomba dance is a couple dance from which many styles such as, tarraxinha and Urban kiz derived from. Cape Verdeans immigrants who moved to France in the 1980s, they were exposed to compas music in the 80s, they blended it with a traditional Cape Verde style called the coladera, thus creating cola-zouk, which is similar to kizomba and typically sung in Cape Verdean Creole. It is this rhythm that was confused with kizomba, and was heard in Portugal when Eduardo Paim arrived there and released his first record with kizomba music."
    }
]

const venueData = [
    {
        "name": "Solas",
        "location": "232 E 9th St, New York, NY 10003",
        "contact": "212-375-0297"
    },
    {
        "name": "Las Chicas Locas",
        "location": "268 W 47th St 2nd Fl, New York, NY 10001",
        "contact": "917-684-8584"
    },
    {
        "name": "Pier 45",
        "location": "Hudson River Greenway, New York, NY 10014",
        "contact": "Contact organizer"
    },
    {
        "name": "DanceSport",
        "location": "230 W 39th St, New York, NY 10018",
        "contact": "212-307-1111"
    }
]

const seedAll = () => {
    venueData.forEach(async venue => await Venue.create(venue))
    danceStyleData.forEach(async style => await Ref_Dance_Style.create(style))
    organizerData.forEach(async account => await Organizer.create(account))
    eventData.forEach(async event => await Event.create(event))
}
seedAll()