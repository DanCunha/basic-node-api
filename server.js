const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

const uri = 'mongodb+srv://cunhacdaniel:Maodcc!@@clusterinit.htyik.mongodb.net/mongo-node?retryWrites=true&w=majority';
//mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log("MongoDB Connected");
})
.catch( err  => console.log(err));


requireDir('./src/models');

//const Product = mongoose.model('Product');
//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);