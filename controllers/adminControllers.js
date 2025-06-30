import { Apartment } from "../models/Apartment.model.js";

export const getNewApartment = (req, res)=> {
    res.render("add-apartment.ejs");
};

export const postNewApartment = async (req, res)=> {

    const { title, price, size, mainPhoto} = req.body;

    try {
        await Apartment.create({
            title: title,
            price: price,
            squareMeters: size,
            mainPhoto: mainPhoto

        });

        res.send('Apartamento insertado correctamente. <a href="/">Volver al HOME</a>');

    } catch (error) {
        res.send('Ups! Algo ha ido mal! Hemos informado a los desarrolladres. <a href="/">Volver al HOME</a>');
        console.log(error.message);
    }

};
