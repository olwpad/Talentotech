import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLenguaje(props) {
  return (
      <ul>
        <li>
          <Link to="/">{props.traduccion.home}</Link>
        </li>
        <li>
          <Link to="/about">{props.traduccion.about}</Link>
        </li>
        <li>
          <Link to="/contact">{props.traduccion.contact}</Link>
        </li>
        <li>
        <img src={props.logo} width={40} />
        </li>
      </ul>
  );
}

export default HeaderLenguaje;
