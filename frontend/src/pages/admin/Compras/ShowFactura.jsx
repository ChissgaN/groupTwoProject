import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowFactura = () => {
  const { id } = useParams();
  const [compra, setCompra] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/compra/${id}`)
      .then((res) => res.json())
      .then((data) => setCompra(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {compra ? (
        <div>
          <h1>Detalles de la compra con ID: {id}</h1>
          <p>Número de factura: {compra.num_factura}</p>
          <p>Fecha de creación: {compra.created_at}</p>
          <p>Proveedor: {compra.proveedore.compañia}</p>
          <h2>Productos:</h2>
          <ul>
            {compra.productos.map((producto, index) => (
              <li key={index}>
                Nombre: {producto.nombre}, Cantidad: {producto.cantidad}, Precio: {producto.costo}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Cargando detalles de la compra...</p>
      )}
    </div>
  );
};

export default ShowFactura;
