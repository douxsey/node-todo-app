import express from "express";
import mongoose from 'mongoose'
import router from "./routes";
import { config } from "./config";
import bodyParser from "body-parser";
let app = express();

app.use(bodyParser.json())
app.use(router)

mongoose.connect(config.database.url, {useNewUrlParser: true})
  .then(connection => {
    console.log("mongoose connected")
  })
  .catch(error => {
    console.log(error);
  })
app.listen(config.server.port, () => {
  console.log(`application started at ${config.server.port}`)
})