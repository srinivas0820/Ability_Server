const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let subcontractor = new Schema(
  {
    name: {
      type: String
    },
    username: {
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
  { collection: "Subcontractors" }
);

module.exports = mongoose.model("subcontractors", subcontractor);