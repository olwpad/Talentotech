import React, { useState } from 'react';

function conIdioma(ComponenteOriginal) {
  return function ComponenteMejorado(props) {
    const [idioma, setIdioma] = useState('es');

    const cambiarIdioma = (nuevoIdioma) => {
      setIdioma(nuevoIdioma);
    };

    const traducciones = {
      es: {
        home: 'Inicio',
        about: 'Acerca de',
        contact: 'Contacto',
      },
      en: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
      },
      fr: {
        home: 'Accueil',
        about: 'À propos',
        contact: 'Contact',
      },
    };

    const traduccion = traducciones[idioma]; // Obtener la traducción actual

    return (
      <div>
        <ComponenteOriginal
          {...props}
          traduccion={traduccion}
          cambiarIdioma={cambiarIdioma}
        />
        <div>
          <button onClick={() => cambiarIdioma('es')}>Español</button>
          <button onClick={() => cambiarIdioma('en')}>Inglés</button>
          <button onClick={() => cambiarIdioma('fr')}>Francés</button>
        </div>
      </div>
    );
  };
}

export default conIdioma;
