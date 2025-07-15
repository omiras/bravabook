import { getApiApartments } from "../controllers/apiControllers.js";
import express from 'express';

const router = express.Router();

// endpoint para obtener todos los apartamentos en formato JSON
router.get('/apartments', getApiApartments);

export default router;