import multer from 'multer';
import { Request } from 'express';

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (file.mimetype === 'audio/mpeg') {
        cb(null, true);
    } else {
        cb(new Error('Only MP3 files are allowed'));
    }
};

const upload = multer({ fileFilter });

export default upload.single('audio');

