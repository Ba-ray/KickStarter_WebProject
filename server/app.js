//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
require('dotenv').config();
const authRoute = require('./routes/auth');
const projectRoute = require('./routes/Projects')
const uploadRoute = require('./routes/upload')
const userRoute = require('./routes/Users')

//app

const app = express();
app.use(express.json())
app.use('/uploads', express.static('public/uploads'));

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
app.use("/api/Upload", uploadRoute)
app.use("/api/user" , userRoute)

//routes



//port
const port = process.env.PORT || 8080;

//listener
const server = app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);