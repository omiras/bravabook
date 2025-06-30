import express from 'express';
import { connectDB } from './utils/db.js';

// importamos del fichero correspondiente todas las rutas que tienen que ver con los usuarios generales
import indexRoutes  from './routes/indexRoutes.js'; 

// importar el fichero que contiene las rutas de administrador
import adminRoutes from './routes/adminRoutes.js';

// Creamos una instancia de express para definir los endpoints

const app = express();

// Poder procesar información de los formularios
app.use(express.urlencoded({extended: true}));

app.use(indexRoutes);
app.use("/admin", adminRoutes); // todas las rutas que se encuentran en adminRouter van a ser prefijadas por "/admin"


// Conectarnos al a base de datos
// top-leve await
await connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Escuchando peticiones en el puerto http://localhost:${PORT}`);
})