import { Express, Request, Response } from "express";
import { uploadFile } from "./controller/fileupload.controllers";
import { mp3File } from "./controller/mp3File.controllers";

// import { createUserHandler } from "./controller/user.controllers";
// import validateResource from '../src/middleware/validateResource'
// import { createUserSchema } from "./schema/user.schema";
import fileUpload from '../config/multerConfig'; 
import upload from '../config/audio'; 




function routes(app: Express) {
    app.get("/checking", (req: Request, res: Response) => {
        res.sendStatus(200);
    })

    // app.post('/api/users', validateResource(createUserSchema), createUserHandler);
    app.post('/api/upload-file', fileUpload, uploadFile);

    app.post('/api/whisper', upload, mp3File);

  }

export default routes; 
