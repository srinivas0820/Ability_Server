const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let employee = new Schema(
  {
    name: {
      type: String
    },
    jobId: {
        type: String
    },
    dob: {
      type: String
    },
    startDate: {
      type: String
    },
    payRate: {
      type: String
    },
    billRate: {
        type: String
    },
    backgroudCheck: {
        date: {
            type: String
        },
        isCleared: {
            type: Boolean
        },
        reason: {
            type: String
        }
    },
    disablity: {
        type: String
    }
  },
  { collection: "Employee" }
);

module.exports = mongoose.model("employee", employee);