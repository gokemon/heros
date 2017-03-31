"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const user_1 = require("../schemas/user");
global.Promise = require("q").Promise;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const MONGODB_CONNECTION = "mongodb://localhost:27017/heros";
let connection = mongoose.createConnection(MONGODB_CONNECTION);
var User = connection.model("User", user_1.userSchema);
let chai = require("chai");
chai.should();
describe("User", function () {
    describe("create()", function () {
        it("should create a new User", function () {
            let user = {
                email: "michael@example.com",
                firstName: "Michael",
                lastName: "Gokey",
                phoneMobile: "404-671-0721"
            };
            return new User(user).save().then(result => {
                result._id.should.exist;
                result.email.should.equal(user.email);
                result.firstName.should.equal(user.firstName);
                result.lastName.should.equal(user.lastName);
                result.phoneMobile.should.equal(user.phoneMobile);
            });
        });
    });
    describe("read()", function () {
        it("should read User data", function () {
        });
    });
    describe("update()", function () {
        it("should update User", function () {
        });
    });
    describe("delete()", function () {
        it("should delete User", function () {
        });
    });
});
