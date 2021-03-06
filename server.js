const express = require('express');
const mongoose = require('mongoose')
const requireDir = require('require-dir');
const cors = require('cors');


//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Inicnando DB

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

//routes 
app.use('/api', require('./src/routes/ProductRoute'))
app.use('/api/auth', require('./src/routes/UserRoute'));

app.listen(3001);