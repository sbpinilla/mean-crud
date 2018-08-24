const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');
const  cors = require('cors')

const app = express();

// configuracion del servidor
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(cors({origin:'http://localhost:4200'}));
// rutas 
app.use('/api/empleados',require('./routes/empleado.routes'));


// iniciar servidor 
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto',app.get('port'));
}); 