import { Apartment } from "../models/Apartment.model.js";

export const getApiApartments = async (req, res) => {
    // 1. Recuperar todos los apartmentos de la base de datos
    const allApartments = await Apartment.find();

    // 2. Responder al cliente con todos los apartamentos en formato JSON (NO RENDER)
    res.json(allApartments);
}