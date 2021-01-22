const express = require("express");
const router = express.Router();

const User = require("../model/user");

router.post('/login', (req, res, next) => {
    User.findOne({"username": req.body.username, "password": req.body.password}).then(user => {
        return res.status(200).json({
            status: "ok",
            message: "Login Success"
        });
    }).catch(err => {
        return res.status(401).json({
            status: "error",
            message: "Login Failed"
        });
    });
});




module.exports = router;