import React, { useState } from 'react';
import './App.css';
import Producto from './Producto';

//JSX
export default function App() {
  const productos = [
    {
      "nombre": "Raspberry Pi 4",
      "desc": " Kit Raspberry Pi 4, incluye cargador, memoria micro SD..",
      "precio": 50
    },
    {
      "nombre": "Disco duro 500GB",
      "desc": "Disco duro 500GB estado sólido. 1 Mes de garantía",
      "precio": 180
    },
    {
      "nombre": "Disco duro 1TB",
      "desc": "Disco duro 1TB mecánico. 10 Mes de garantía",
      "precio": 200
    },
    {
      "nombre": "Celular 7'",
      "desc": "Smartphone xiaomi, cargador,....",
      "precio": 350
    }
  ];
  // Estados: Lugar donde se almacena datos y cuenta con una función para modificar esos datos
  const [listaProductos, setListaProductos] = useState(productos);

  const buscaProducto = (evento) =>{
    setListaProductos(productos.filter(p => p.nombre.toLowerCase().includes(evento.target.value.toLowerCase())))

  };

  return (
    <div>
      <input type="text" placeholder="Buscar producto..." onChange={buscaProducto}/>

      {listaProductos.map(p => 
      <Producto 
      nombre={p.nombre} 
      desc={p.desc}  
      precio={p.precio}  
      /> )}


    </div>
  )
}

