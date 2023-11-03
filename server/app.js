//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
require('dotenv').config();
const authRoute = require('./routes/auth');
const projectRoute = require('./routes/Projects')

//app

const app = express();
app.use(express.json())


//DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Connection FAILED", err));


//middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use("/api/auth", authRoute)
app.use("/api/projects", projectRoute)

//routes



//port
const port = process.env.PORT || 8080;

//listener
const server = app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);