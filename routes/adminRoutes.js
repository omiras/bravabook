import express from 'express';
import { getNewApartment, postNewApartment } from '../controllers/adminControllers.js';

const router = express.Router();

// endpoint AÑADIR APARTAMENTO - FORMULARIO
router.get("/apartment/new", getNewApartment);

// endpoint AÑADIR APARTMENTO - POST - INSERTAR APARTAMENTO EN LA BASE DE DATOS
router.post("/apartment", postNewApartment);
export default router;