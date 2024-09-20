// import UserModel from '../models/user.model';
// import { CreateUserInput } from '../schema/user.schema';
import UploadFileModel from '../models/File-upload.model';


// export async function createUser(input: CreateUserInput) {
//     try {
//         return await UserModel.create(input);
//     } catch (e: any) {
//         throw new Error(e.message);
//     }
// }

export async function storeFileUrl(url: string): Promise<void> {
    try {
        await UploadFileModel.create({ file_name: url });
    } catch (error) {
        console.error("Error storing file URL:", error);
        throw new Error("Error storing file URL");
    }
}
