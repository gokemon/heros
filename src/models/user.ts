// the mongoose package has a Document class for us to use
import { Document } from "mongoose";
import { IUser} from "../interfaces/user";

export interface IUserModel extends IUser, Document{
    // custom methods for the model go here

}

