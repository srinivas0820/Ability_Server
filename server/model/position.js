const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let position = new Schema(
  {
    position_id: String,
    title: {
      type: String
    },
    description: {
      type: String
    },
    type: {
      type: String
    }
  },
  { collection: "Position", _id: false  }
);

module.exports = mongoose.model("positions", position);