const express = require("express");
const router = express.Router();

const logger = require("../logger");
const Job = require("../model/job");
const Division = require("../model/division");
const Position = require("../model/position");

const Util = require("../utils/utils");

router.post('/', (req, res, next) => {
    const job = new Job(req.body);
    job.status = "OPEN";
    Job.countDocuments({}, function( err, count){
      job._id = "Job_"+Util.getJobId(count + 1, 5)
      console.log(job._id);
      job.save().then(data => {
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
    
});


router.get('/get', (req, res, next) => {
    const query = req.query.status ? {"status" : req.query.status} : {};
    const skip = parseInt((req.query.page-1) * req.query.size);
    const limit =  parseInt(req.query.size);
    Job.find(query).sort({createdAt: -1}).skip(skip).limit(limit)
      .exec(function(err, response) {
        return res.status(200).json({
            status: "ok",
            response: response
        });
    });
});

router.get('/get/position', (req, res, next) => {
  const query = req.query.position_title ? {"positionDetail.title" : req.query.position_title} : {};
  console.log(query);
  Job.find(query).then(response => {
    return res.status(200).json({
        status: "ok",
        response: response
    });
  }).catch(err => {
    return res.status(500).json({
      status: "error",
      data: err
    });
  });
});

router.get('/position', (req, res, next) => {
    Position.find().then(position => {
      console.log(position);
      return res.status(200).json({
        status: "ok",
        position: position
      });
    }).catch(err => {
      return res.status(500).json({
        status: "error",
        data: err
      });
    });
});




router.get('/', (req, res, next) => {
  console.log(req.query.id);
  Job.findOne({"_id": req.query.id}).then(Job => {
    console.log(Job);
    return res.status(200).json(Job);
  }).catch(err => {
    return res.status(500).json({
      status: "error",
      data: err
    });
  });
});


router.post('/assign', (req, res, next) => {
  console.log(req.body);
  const _id = req.body._id;
  const subcontractorId = req.body.subcontractorId;
  Job.findOneAndUpdate({"_id": _id}, {"subcontractorId": subcontractorId, "status": "ACTIVE"}, {new: true}).then(job => {
    console.log(job);
    return res.status(200).json(job);
  }).catch(err => {
    return res.status(500).json({
      status: "error",
      data: err
    });
  });
});


router.post('/close', (req, res, next) => {
  console.log(req.body);
  const _id = req.body._id;
  const endDate = req.body.endDate;
  const reason = req.body.reason;
  Job.findOneAndUpdate({"_id": _id}, {"endDate": endDate, "reason": reason, "status": "CLOSE"}, {new: true}).then(job => {
    console.log(job);
    return res.status(200).json({
      status:"ok",
      message: "Job Closed Successfully"
    });
  }).catch(err => {
    return res.status(500).json({
      status: "error",
      data: err
    });
  });
});


router.post('/open', (req, res, next) => {
  console.log(req.body);
  const _id = req.body._id;
  const reOpenedDate = req.body.date;
  const reOpenedReason = req.body.explain;
  Job.findOneAndUpdate({"_id": _id}, {"endDate": "", "reason": "", "subcontractorId": "", "status": "OPEN", "reOpenedReason": reOpenedReason, "reOpenedDate": reOpenedDate}, {new: true}).then(job => {
    console.log(job);
    return res.status(200).json({
      status:"ok",
      message: "Job Re-Opened Successfully"
    });
  }).catch(err => {
    return res.status(500).json({
      status: "error",
      data: err
    });
  });
});

module.exports = router;