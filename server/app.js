//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//app

const app = express();



//middleware
app.use(morgan('dev'));


//routes



//port