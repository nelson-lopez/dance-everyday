import { Model, DataTypes, Sequelize } from 'sequelize';
export class Organizer extends Model {}
export class Event extends Model {}
export class Venue extends Model {}
export class Ref_Dance_Style extends Model {}

const sequelize = new Sequelize({
  username: 'postgres',
  password: 'dap',
  database: 'dance_everyday_db',
  dialect: 'postgres'
});

Organizer.init(
  {
    name: DataTypes.STRING,
    company: DataTypes.STRING
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: 'Organizer',
    modelName: 'organizer'
  }
);

Event.init(
  {
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.STRING
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: 'Event',
    modelName: 'event'
  }
);

Venue.init(
  {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    contact: DataTypes.STRING
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: 'Venue',
    modelName: 'venue'
  }
);

Ref_Dance_Style.init(
  {
    dance_style: DataTypes.STRING,
    dance_style_description: DataTypes.TEXT
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: 'Ref_Dance_Style',
    modelName: 'danceStyle'
  }
);

Organizer.hasMany(Event);
Venue.hasMany(Event);
Ref_Dance_Style.hasMany(Event);
Event.hasMany(Ref_Dance_Style);
Event.belongsTo(Organizer);
Event.belongsTo(Venue);
