import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    {
        database: "dance_everyday_db",
        dialect: "postgres"
    }
)

export class Organizer extends Model {}

Organizer.init(
    {   
        Organizer_Name : DataTypes.STRING,
        Company: DataTypes.STRING
    },
    {
        freezeTableName: true,
        tableName: "Organizer",
        sequelize
    }
)

export class Event extends Model {}

Event.init(
    {
        Event_Date: DataTypes.STRING,
        Event_Description: DataTypes.STRING
    },
    {
        freezeTableName: true,
        tableName: "Event",
        sequelize
    }
)

export class Venue extends Model {}

Venue.init(
    {
        Venue_Name: DataTypes.STRING,
        Venue_Location: DataTypes.STRING,
        Venue_Contact: DataTypes.STRING
    },
    {
        freezeTableName: true,
        tableName: "Venue",
        sequelize
    }
)

export class Ref_Dance_Style extends Model {}

Ref_Dance_Style.init(
    {
        Dance_Style: DataTypes.STRING,
        Dance_Style_Description: DataTypes.STRING
    },
    {
        freezeTableName: true,
        tableName: "Ref_Dance_Style",
        sequelize
    }
)