import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    {
        database: "dance_everyday_db",
        dialect: "postgres"
    }
)

export class Organizer extends Model {
    
}