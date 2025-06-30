import { Apartment } from '../models/Apartment.model.js';

export const getApartments = async (req, res)=> {
   // 1. Recuperar los datos del Modelo (Apartment)
    const allApartments = await Apartment.find();
    console.log("🚀 ~ app.get ~ allApartments:", allApartments)

   // 2. Este endpoint va a pasar los datos una vista
    res.render('home.ejs', {
        allApartments
    })
};

export const getApartmentById = async (req, res)=> {

    // 1. Recuperar del modelo el documento identificado con el id :id
    const apartment = await Apartment.findById(req.params.id);

    // 2. Crear una vista de nombre apartment-detail.ejs

    // 3. PAsar a esta vista el objeto apartamento
    res.render("apartment-detail.ejs", {
        apartment
    })

}