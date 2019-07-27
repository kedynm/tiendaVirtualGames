const mongoose = require('mongoose')
const {Profile} = require('./ProfileModel')
const {Product} = require('./ProductModel')
 
//const DB_URL_MONGO = 'mongodb+srv://johnfloro:johnfloro123@cluster0-ow4nx.mongodb.net/poli-asamblea?retryWrites=true&w=majority'
const DB_URL_MONGO = 'mongodb+srv://kedyn:ak123456@cluster0-foywu.mongodb.net/poli-asamblea?retryWrites=true&w=majority'

//Cadena de conexión y se manda a llamar los modelos
mongoose.connect(DB_URL_MONGO,{ useNewUrlParser: true },(err)=>{
  if (!err) console.log('Conexión exitosa con la base de datos kedyn');
});

module.exports = {
  Profile,Product
}