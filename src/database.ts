import { DataSource } from "typeorm";
import { User } from "./app/models/User";
require('dotenv').config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User],
  synchronize: true,
})

AppDataSource.initialize()
  .then(() => {
    console.log('Database Conected!')
  })
  .catch((err) => console.log(err))