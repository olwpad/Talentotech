import { Schema, model } from 'mongoose';

// Esquema para la sección About
const aboutSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  profileImage: { type: String } // URL de la imagen de perfil
});

// Esquema para la sección Contact
const contactSchema = new Schema({
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  socialLinks: [{
    platform: { type: String },
    url: { type: String }
  }]
});

// Esquema para la sección Projects (opcional)
const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  technologies: [{ type: String }],
  link: { type: String }
});

// Esquema para la sección Skills (opcional)
const skillSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, min: 0, max: 100 } // Nivel de habilidad en porcentaje
});

// Esquema principal del Portafolio
const portafolioSchema = new Schema({
  about: aboutSchema,
  contact: contactSchema,
  projects: [projectSchema],
  skills: [skillSchema],
  createdAt: { type: Date, default: Date.now }
});

// Crear el modelo para el esquema
const Portafolio = model('Portafolio', portafolioSchema);

export default Portafolio;
