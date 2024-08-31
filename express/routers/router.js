import { Router } from 'express';
import Portafolio from '../models/Portafolio.js';

const router = Router();

router.post('/portafolio', async (req, res) => {
    const { about, contact, projects, skills } = req.body;

    // Validar los campos requeridos
    if (!about || !contact || !projects || !skills) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Crear una instancia del modelo con los datos recibidos
    const newPortafolio = new Portafolio({
        about: about,
        contact: contact,
        projects: projects,
        skills: skills,
    });

    try {
        // Guardar el documento en la base de datos
        const savedPortafolio = await newPortafolio.save();
        res.status(201).json(savedPortafolio); // Responder con el documento guardado y código 201
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejar el error y responder con un mensaje
    }
});

export default router;
