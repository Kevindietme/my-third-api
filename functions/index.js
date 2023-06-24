
import {onRequest} "firebase-functions/v2/https";
import logger from "firebase-functions/v2/firestore";
import express from "express";
import cors from "cors"; 

const app = express();

const app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => res.send("This is working"));

export const api = onRequest(app)


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

