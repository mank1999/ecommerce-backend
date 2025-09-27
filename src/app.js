import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./model/connection.js";
import userRoutes from "./routes/user.js";
import sequelize from "./model/connection.js";
import dotenv from 'dotenv';
const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use("/", userRoutes);

connectDB()
  .then(async () => {
    await sequelize.sync({ alter: true });
    console.log("✅ db sync successfull");
  })
  .catch((err) => {
    console.log("db sync fail ", err);
  });
app.listen(8080, () => {
  console.log("port listing on 8080");
});
