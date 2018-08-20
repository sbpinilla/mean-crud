const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/mean-crud';

mongoose.connect(URI, { useNewUrlParser: true })
        .then(db => console.log('La base de datos esta conectado'))
        .catch(err => console.error(err));
        
 module.exports = mongoose;