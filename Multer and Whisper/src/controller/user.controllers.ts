// import { Request, Response } from "express";
// import { omit } from "lodash";
// import { CreateUserInput } from "../schema/user.schema";
// import { createUser , storeFileUrl } from "../service/user.service";
// import { storeFileUrl } from "../service/user.service";
// import path from 'path';

// import logger from "../utils/logger";

// export async function createUserHandler(
//   req: Request<{}, {}, CreateUserInput>,
//   res: Response
// ) {
//   try {
//     const user = await createUser(req.body);
//     return res.send(omit(user.toJSON(), "password"));
//   } catch (e:any) {
//     logger.error(e);
//     return res.status(400).send(e.message);
//   }
// }
