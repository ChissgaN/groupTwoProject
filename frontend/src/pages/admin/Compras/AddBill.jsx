import React, { useState } from "react";

function AddBill() {
  const [formData, setFormData] = useState({
    num_factura: "",
    proveedore_id: "",
    productos: [],
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleProductoChange = (event, index) => {
    const productos = [...formData.productos];
    productos[index][event.target.name] = event.target.value;
    setFormData({ ...formData, productos });
  };

  const handleAddProducto = () => {
    setFormData({
      ...formData,
      productos: [
        ...formData.productos,
        { producto_id: "", cantidad: "", precio_unitario: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Compra data submitted:", formData);

    fetch("http://127.0.0.1:8000/api/compra", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {

        setFormData({
          num_factura: "",
          proveedore_id: "",
          productos: [],
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Agregar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número de Factura:</label>
          <input
            type="text"
            name="num_factura"
            value={formData.num_factura}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Proveedor ID:</label>
          <input
            type="text"
            name="proveedore_id"
            value={formData.proveedore_id}
            onChange={handleInputChange}
          />
        </div>
        <h3>Productos</h3>
        {formData.productos.map((producto, index) => (
          <div key={index}>
            <label>Producto ID:</label>
            <input
              type="text"
              name="producto_id"
              value={producto.producto_id}
              onChange={(event) => handleProductoChange(event, index)}
            />
            <label>Cantidad:</label>
            <input
              type="number"
              name="cantidad"
              value={producto.cantidad}
              onChange={(event) => handleProductoChange(event, index)}
            />
            <label>Precio Unitario:</label>
            <input
              type="number"
              name="precio_unitario"
              value={producto.precio_unitario}
              onChange={(event) => handleProductoChange(event, index)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddProducto}>
          Agregar Producto
        </button>
        <button type="submit">Agregar Compra</button>
      </form>
    </div>
  );
}

export default AddBill;
