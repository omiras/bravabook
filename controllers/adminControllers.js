import { Apartment } from "../models/Apartment.model.js";

export const getNewApartment = (req, res)=> {
    res.render("add-apartment.ejs", {
        apartment: {},
        editMode: false
    });
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

export const getEditApartment = async (req, res) => {
    // 1. Recuperar el documento identificado por su id
    const { id } = req.params;

    const apartment = await Apartment.findById(id);

    // 2. Renderizar la vista add-apartment.ejs y pasar a la misma todos los datos apartamento
    res.render('add-apartment.ejs', {
        apartment,
        editMode: true
    })

    // 3. En plantilla EJS, rellenar cada uno de los campos formulario con el valor de cada uno de los campos del documento


}

export const postEditApartment = async (req, res) => {
    // La petición es de tipo POST, todos los datos del formulario deberían estar en req.body
    // El ID del apartamento, lo tenemos en req.params.id
    const id = req.params.id;
    console.log("🚀 ~ postEditApartment ~ id:", id)
    
    // Actualizar el documento de la base de datos dado su id
    await Apartment.findByIdAndUpdate(id, {
        title: req.body.title,
        price: req.body.price,
        squareMeters: req.body.size,
        mainPhoto: req.body.mainPhoto
    });

    // TODO: Faltaria algún mensaje de confirmacion
    res.redirect(`/apartment/${id}`)
}