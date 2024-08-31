// components/Header.js
import React from 'react';

import conIdioma from './ConIdioma';
import HeaderLenguaje from './HeaderLenguaje';

const SaludoConIdioma = conIdioma(HeaderLenguaje);
function Header() {
  return (
    <header>
      <nav>
            <SaludoConIdioma logo={"https://1000marcas.net/wp-content/uploads/2019/11/Pringles-Logo-500x281.png"} />
      </nav>
    </header>
  );
}

export default Header;
