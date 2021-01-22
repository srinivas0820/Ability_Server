const mongoose = require("mongoose");
const express = require("express");
const app = express();

const logger = require("./logger");

const authRoute = require("./routes/auth");
const jobRoute = require("./routes/job");
const subcontractorRoute = require("./routes/subcontractor");
const employeeRoute = require("./routes/employee");

const port = 4000;

var uri = "mongodb://localhost:27017/ability";

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/job', jobRoute);
app.use('/api/subcontractor', subcontractorRoute);
app.use('/api/auth', authRoute);
app.use('/api/employee', employeeRoute);

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  logger.info('MongoDB database connection established successfully');
});


app.listen(port, function() {
  logger.info("Server is running on Port: " + port);
});