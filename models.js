import { Model, DataTypes, Sequelize } from 'sequelize';
export class Organizer extends Model { }
export class Event extends Model { }
export class Venue extends Model { }
export class Ref_Dance_Style extends Model { }

const sequelize = new Sequelize({
    username: 'postgres',
    password: 'postgres',
    database: 'dance_everyday_db',
    dialect: 'postgres'
});

Organizer.init(
    {
        name: DataTypes.STRING,
        company: DataTypes.STRING,
        event_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
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
        venue_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        ref_dance_style_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
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
        contact: DataTypes.STRING,
        event_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
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

Event.hasOne(Organizer, { sourceKey: "id", foreignKey: "event_id", keyType: DataTypes.INTEGER })
Event.belongsTo(Venue, { sourceKey: "id", foreignKey: "event_id", keyType: DataTypes.INTEGER })
// Event.hasMany(Ref_Dance_Style, { sourceKey: "id", foreignKey: "event_id", keyType: DataTypes.INTEGER })
Venue.hasMany(Event, { sourceKey: "id", foreignKey: "venue_id", keyType: DataTypes.INTEGER })
Organizer.hasMany(Event, { sourceKey: "id", foreignKey: "event_id", keyType: DataTypes.INTEGER })
Ref_Dance_Style.hasMany(Event, { sourceKey: "id", foreignKey: "dance_style_id", keyType: DataTypes.INTEGER })