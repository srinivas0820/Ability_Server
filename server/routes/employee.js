const express = require("express");
const router = express.Router();

const logger = require("../logger");
const Employee = require("../model/employee");
const Job = require("../model/job");
const Util = require("../utils/utils");


router.post('/', (req, res, next) => {
    logger.info("Creating employee for the job");
    const employee = new Employee(req.body);
    employee.save().then(data => {
        console.log(data);
        return res.status(200).json({
            status: "ok",
            data: data._id
        });
    }).catch(err => {
        console.log(err);
        return res.status(500).json({
            status: "error",
            data: err
        });
    });
});


router.post('/payrate', (req, res, next) => {
    logger.info("Updating payrate for the job and employee");
    console.log(req.body);
    const jobId = req.body.jobId;
    const payRate = req.body.payRate;
    Employee.findOneAndUpdate({"jobId": jobId}, {"payRate": payRate}, {new: true}).then(employee => {
      console.log(employee);
      Job.findOneAndUpdate({"_id": jobId}, {"payRate": payRate}, {new: true}).then(job => {
        console.log(job);
        return res.status(200).json({
            status:"ok",
            message: "Pay Rate Updated Successfully"
        });
      }).catch(err => {
        return res.status(500).json({
          status: "error",
          data: err
        });
      });
    }).catch(err => {
      return res.status(500).json({
        status: "error",
        data: err
      });
    });
  });

module.exports = router;