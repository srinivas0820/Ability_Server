const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let division = new Schema(
  {
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
  { collection: "Division" }
);

module.exports = mongoose.model("divisions", division);