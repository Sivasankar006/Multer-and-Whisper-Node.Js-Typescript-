import mongoose from 'mongoose';
import config from "../../config/default";
import dotenv from 'dotenv';
import logger from '../../src/utils/logger'

dotenv.config(); 

const dbUri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/mydatabase';

async function connect() {
    try {
        await mongoose.connect(dbUri);
        logger.info("DB is connected");
    } catch (error:any) {
        logger.error("Could not connect to DB:", error.message);
        process.exit(1);
    }
}

export default connect;
