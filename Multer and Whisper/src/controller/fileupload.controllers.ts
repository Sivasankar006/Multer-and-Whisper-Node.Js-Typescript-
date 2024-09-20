import { Request, Response } from "express";
import { storeFileUrl } from "../service/user.service";


export async function uploadFile(req: Request, res: Response) {
    if (!req.file || !req.file.filename) {
      return res.status(400).json({
        status: false,
        message: 'File upload failed. No file received.',
      });
    }
  
    try {
      await storeFileUrl(req.file.filename);
      return res.json({
        status: true,
        message: 'File upload success!',
      });
    }
    
    catch (error) {
      return res.status(500).json({
        status: false,
        message: 'Error storing file URL.',
      });
    }
  }