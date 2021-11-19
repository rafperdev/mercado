import React from 'react';
import raspberry from './assets/raspberry.jpg';

export default function Producto(props) {
    return (
        <div key={props.nombre}>
        <div>
          <img className="imagen" src={raspberry} alt="Imagen del producto" />
        </div>
        <div>
          {props.nombre}
        </div>
        <div>
          {props.desc}
        </div>
        <div>
          {props.precio}
        </div>
      </div>
    )
}