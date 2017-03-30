// the mongoose package has a Schema class for us to use
import {Schema} from "mongoose";

// ok why are these Strings caps, 
// and the interfaces are lowercase?
export var userSchema: Schema = new Schema({
    createdAt: Date,
    email: String,
    firstName: String,
    lastName: String,
    phoneMobile: String
});

userSchema.pre("save", function(next){
    // if theres no createdAt date value, then add right now
    if (!this.createdAt){
        this.createdAt = new Date();
    } 
    next();
});
