const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema(
  {
    name: {
      type: String
    },
    username: {
      type: String
    },
    password: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String
    },
    status: {
        type: String
    }
  },
  { collection: "User" }
);

module.exports = mongoose.model("users", user);