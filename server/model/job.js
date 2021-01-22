const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let job = new Schema(
  {
    _id: String,
    companyDetails: {
      StateDepartment: {
        type: String
      },
      StateDivison: {
        type: String
      },
      address: {
        type: String
      },
      city: {
        type: String
      },
      county: {
        type: String
      },
      zipcode: {
        type: String
      }
    },
    billingContact : {
      contactName: {
        type: String
      },
      contactPhone: {
        type: String
      },
      contactEmail: {
        type: String
      },
      sameAsCompanyAddress: {
        type: Boolean
      },
      address: {
        type: String
      },
      city: {
        type: String
      },
      zipcode: {
        type: String
      },
      county: {
        type: String
      }      
    },
    positionDetail : {
      title: {
        type: String
      },
      description: {
        type: String
      },
      sameAsboveAddress: {
        type: Boolean
      },
      address: {
        type: String
      },
      city: {
        type: String
      },
      county: {
        type: String
      },
      zipcode: {
        type: String
      },
      hourlyWage: {
        type: String
      },
      schedule: {
        type: Array
      },
      scheduledHours: {
        type: String
      },
      shiftStartTime: {
        type: String
      },
      shiftEndTime: {
        type: String
      },
      startDate: {
        type: Date
      },
      endDate: {
        type: Date
      }
    },
    supervisorDetails: {
      name: {
        type: String
      },
      phone: {
        type: String
      },
      email: {
        type: String
      }
    },
    status: {
      type: String
    },
    subcontractorId: {
      type: String
    },
    reason: {
      type: String
    },
    endDate: {
      type: Date
    },
    reOpenedReason: {
      type: String
    },
    reOpenedDate: {
      type: Date
    },
    payRate: {
      type: String
    },
    createdAt: { type: Date, default: Date.now }
  },
  { collection: "Job", _id: false }
);

module.exports = mongoose.model("jobs", job);
