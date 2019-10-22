import { Model, DataTypes, Sequelize } from 'sequelize';
export class Organizer extends Model {}
export class Event extends Model {}
export class Venue extends Model {}
export class Ref_Dance_Style extends Model {}

const sequelize = new Sequelize({
//   username: 'postgres',
//   password: 'dap',
  database: 'dance_everyday_db',
  dialect: 'postgres'
});

Organizer.init(
  {
    organizer_name: DataTypes.STRING,
    company: DataTypes.STRING
  },
  {
    freezeTableName: true,
    tableName: 'Organizer',
    sequelize
  }
);

Event.init(
  {
    event_name: DataTypes.STRING,
    event_date: DataTypes.STRING,
    event_description: DataTypes.STRING
  },
  {
    freezeTableName: true,
    tableName: 'Event',
    sequelize
  }
);

Venue.init(
  {
    venue_name: DataTypes.STRING,
    venue_location: DataTypes.STRING,
    venue_contact: DataTypes.STRING
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
    dance_style_description: DataTypes.STRING
  },
  {
    freezeTableName: true,
    tableName: 'Ref_Dance_Style',
    sequelize
  }
);
