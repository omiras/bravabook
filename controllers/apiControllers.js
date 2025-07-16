import { Apartment } from "../models/Apartment.model.js";

export const getApiApartments = async (req, res) => {
    // 1. Recuperar todos los apartmentos de la base de datos
    const allApartments = await Apartment.find();

    // 2. Responder al cliente con todos los apartamentos en formato JSON (NO RENDER)
    res.json(allApartments);
}

export const getFilteredApartments = async (req, res) => {
    // 1. Obtener la query string del objeto request
    let { maxPrice } = req.query;

    // ¿Qué hacer si no me pasan el parámetro maxPrice o dicho parámetro es un valor inválido?
    if (!maxPrice || maxPrice < 1) {
        maxPrice = 999999; // obtener todos los apartamentos
    }

    // Si NO me pasan al menos un number, les voy a entregar un error de forma explícita
    else if (isNaN(maxPrice)) {
        return res.status(400).json({error: "maxPrice must be a positive number"});
    } 

    // 2. Filtrar todos los apartamentos de la base de datos por TODOS los criterios de búsqueda que ha informado el usuario
    const filteredApartments = await Apartment.find({ price: { $lte: maxPrice }});

    // 3. Enviar un JSON con todos los apartamentos que cumplen con el precio máximo
    res.json(filteredApartments);

}