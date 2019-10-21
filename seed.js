import { Organizer, Event, Ref_Dance_Style, Venue } from './models'

const eventData = [
    {
      "Event_Date": "11/1/2019",
      "Event_Description": "Zouk & Kompa Night Each and Every Friday,Music By: DJ KC, DJ Esalar, DJ Marco, DJ Gino, 10 All Night, Ladies Free Till 1AM.8913 Glenwood Rd Brooklyn NY 11236"
    },
    {
      "Event_Date": "4/8/2020",
      "Event_Description": "YoZouk New York Congress, Sheraton New York Times Square Hotel, West 53rd Street,"
    },
    {
      "Event_Date": "11/4/2019",
      "Event_Description": "NYC ZOUK FESTIVAL 2019 FREEDOM EDITION"
    },
    {
      "Event_Date": "10/26/2019",
      "Event_Description": "FREE* Outdoor Zouk Party Back to The Old School Pier 45 Hudson River NYC"
    },
    {
      "Event_Date": "8/30/2021",
      "Event_Description": "Brazilian Day Little Brazil near West 46th Street"
    },
    {
      "Event_Date": "10/22/2019",
      "Event_Description": "KOMPA TUESDAYS!!, Katra Lounge,217 Bowery"
    },
    {
      "Event_Date": "11/3/2019",
      "Event_Description": "Nov 3rd Zouk Class & Social @Las Chicas Locas"
    },
    {
      "Event_Date": "11/5/2019",
      "Event_Description": "NYC Zouk Party @ Solas - FREEZOUKNYC presents NYC ZOUK PARTY with workshops!"
    },
    {
      "Event_Date": "11/10/2019",
      "Event_Description": "DanceSport - Zouk Class & Social @Las Chicas Locas on Nov 10"
    },
    {
      "Event_Date": "11/12/2019",
      "Event_Description": "Zouk NYC PARTY on East 9th Street"
    },
    {
      "Event_Date": "11/19/2019",
      "Event_Description": "Zouk Class & Social @Las Chicas Locas"
    },
    {
      "Event_Date": "11/19/2019",
      "Event_Description": "Party at a beautiful East Village bar with plenty of room to Zouk it out to the amazing DJ Power!! It actually ends at 1:30am!!!"
    }
  ]

  

  const seedAll = () => {
      eventData.forEach(async event => await Event.create(event))
  }

  seedAll()