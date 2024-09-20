import express from "express";
import config from "../config/default";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import cors from "cors"; 

const port = config.port;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization', // Allowed headers
}));


app.use(express.json());


app.listen(port , async() =>{
    logger.info(`App is running http://localhost:${port}`);
    await connect();
    routes(app);
});