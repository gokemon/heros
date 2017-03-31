import "mocha"; // get mocha for testing
// and then get the rest of the User
import { IUser } from "../interfaces/user";
import { IUserModel } from "../models/user";
import { userSchema } from "../schemas/user";

//use q promises.... set up promises
global.Promise = require("q").Promise;

//import mongoose... set up mongoose
import mongoose = require("mongoose");

//then set up q library for mongoose promises
mongoose.Promise = global.Promise;  

//connect to mongoose and create model
const MONGODB_CONNECTION: string = "mongodb://localhost:27017/heros";
let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
var User: mongoose.Model<IUserModel> = connection.model<IUserModel>("User", userSchema);

//require chai and use should() assertions
let chai = require("chai");
chai.should();


describe("User", function() {
  describe("create()", function () {
    it("should create a new User", function () {
      //user object, setup sample data to check for
      let user: IUser = {
        email: "michael@example.com",
        firstName: "Michael",
        lastName: "Gokey",
        phoneMobile: "404-671-0721"
      };//IUser

      //create user and return promise
      return new User(user).save().then(result => {
        //verify _id property exists
        result._id.should.exist;
        //verify email
        result.email.should.equal(user.email);
        //verify firstName
        result.firstName.should.equal(user.firstName);
        //verify lastName
        result.lastName.should.equal(user.lastName);
        //verify phoneMobile
        result.phoneMobile.should.equal(user.phoneMobile);        
      })// new User save
    });// it should create new User
  }); //describe create function

  describe("read()", function () {
    it("should read User data", function () {
      //empty test
    });// it should read User data
  }); //describe read function

  describe("update()", function () {
    it("should update User", function () {
      //empty test
    });// it should update User
  }); //describe update function  

  describe("delete()", function () {
    it("should delete User", function () {
      //empty test
    });// it should delete User
  }); //describe delete function  

});//describe User function




/**********************************************
I could have used “a more TypeScript approach” to creating 
my tests using the project mocha-typescript.    But...
The mocha-typescript module includes several decorators 
that implement the Mocha interfaces.            But...
Decorators are an experimental feature that may change in future releases.
*/

/*********************************************
import { suite, test } from "mocha-typescript";//differnet mocha tester
import { IUser } from "../interfaces/user";//same-same
import { IUserModel } from "../models/user";//same-same
import { userSchema } from "../schemas/user";//same-same
import mongoose = require("mongoose");//same-same


@suite
class UserTest {
  //store test data
  private data: IUser;
  //the User model
  public static User: mongoose.Model<IUserModel>;

  public static before() {
    //use q promises
    global.Promise = require("q").Promise;

    //use q library for mongoose promise
    mongoose.Promise = global.Promise;

    //connect to mongoose and create model
    const MONGODB_CONNECTION: string = "mongodb://localhost:27017/heros";
    let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
    UserTest.User = connection.model<IUserModel>("User", userSchema);

    //require chai and use should() assertions
    let chai = require("chai");
    chai.should();
  }

  constructor() {
    this.data = {
        email: "michael@example.com",
        firstName: "Michael",
        lastName: "Gokey",
        phoneMobile: "404-671-0721"
    };
  }

  @test("should create a new User")
  public create() {
    //create user and return promise
    return new UserTest.User(this.data).save().then(result => {
      //verify _id property exists
      result._id.should.exist;
      //verify email
      result.email.should.equal(this.data.email);
      //verify firstName
      result.firstName.should.equal(this.data.firstName);
      //verify lastName
      result.lastName.should.equal(this.data.lastName);
      //verify phoneMobile
      result.phoneMobile.should.equal(this.data.phoneMobile);
    });//return new UserTest.User
  }//public create() ---- the test
}//class UserTest
*/