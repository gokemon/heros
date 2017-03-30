// the mongoose package has a Model class for us to use
import { Model } from "mongoose";
import { IUserModel } from "./user";

export interface IModel {
  user: Model<IUserModel>;
}

/* I have a user model that is of type Model<IUserModel>. 
* That means that the user property is Model of type IUserModel. 
* Use this model to create/edit/delete documents within our 
users collection. */