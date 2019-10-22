import { Model, DataTypes, Sequelize } from 'sequelize';
export class Organizer extends Model { }
export class Event extends Model { }
export class Venue extends Model { }
export class Ref_Dance_Style extends Model { }

const sequelize = new Sequelize({
    // username: 'postgres',
    // password: 'dap',
    database: 'dance_everyday_db',
    dialect: 'postgres'
});

Organizer.init(
    {
        name: DataTypes.STRING,
        company: DataTypes.STRING,
        // event_id: {
        //     type: DataTypes.INTEGER,
        //     foreignKey: true
        // }
    },
    {
        freezeTableName: true,
        tableName: 'Organizer',
        sequelize
    }
);

Event.init(
    {
        name: DataTypes.STRING,
        date: DataTypes.STRING,
        description: DataTypes.STRING,
        // venue_id: DataTypes.INTEGER,
        // ref_dance_style_id: DataTypes.INTEGER
    },
    {
        freezeTableName: true,
        tableName: 'Event',
        sequelize
    }
);

Venue.init(
    {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        contact: DataTypes.STRING
    },
    {
        freezeTableName: true,
        tableName: 'Venue',
        sequelize
    }
);

Ref_Dance_Style.init(
    {
        dance_style: DataTypes.STRING,
        dance_style_description: DataTypes.TEXT
    },
    {
        freezeTableName: true,
        tableName: 'Ref_Dance_Style',
        sequelize
    }
);

Organizer.hasMany(Event)
Ref_Dance_Style.hasMany(Event)
Venue.hasMany(Event)
Event.hasOne(Organizer)
Event.hasMany(Ref_Dance_Style)
Event.hasOne(Venue)