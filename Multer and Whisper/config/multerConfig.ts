import multer from 'multer';
import path from 'path';
import { Request } from 'express';
import fs from 'fs';


const uploadsDir = path.join(__dirname, '..', 'files', 'uploads');


function ensureDirectoryExists(directory: string) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

ensureDirectoryExists(uploadsDir);

const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req: Request, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileUpload = multer({ storage: storage }).single('file');


export default fileUpload;
