import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
  const { store, actions } = useContext(Context);
  const [contacto, setContacto] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.crearContacto(contacto, navigate);
  };


  return (
    <div className="container mt-4 contenedorAnadirContacto">
      <div className="card cardAnadirContacto">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="formulario">
            <legend>Añade un nuevo contacto</legend>
            <div className="mb-3">
              <label htmlFor="nombreCompleto" className="form-label">
                Nombre completo
              </label>
              <input
                maxLength="15"
                size="15"
                type="text"
                required
                id="nombreCompleto"
                className="form-control"
                placeholder="Nombre completo... máximo 15 caracteres"
                onChange={(e) =>
                  setContacto({ ...contacto, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                maxLength="20"
                size="20"
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) =>
                  setContacto({ ...contacto, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Telefono
              </label>
              <input
                maxLength="15"
                size="15"
                type="text"
                id="telefono"
                className="form-control"
                placeholder="Telefono"
                onChange={(e) =>
                  setContacto({ ...contacto, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <input
                maxLength="20"
                size="20"
                type="text"
                id="direccion"
                className="form-control"
                placeholder="Dirección"
                onChange={(e) =>
                  setContacto({ ...contacto, address: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <div className="form-check d-flex justify-content-end">
                <Link to="/" className="btn btn-secondary me-2 botonanadircontactovolver">
                  Volver a lista de contactos
                </Link>
              </div>
            </div>
            <div className="botonGuardarContacto d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleSubmit(e)}
              >
                <i>Guardar Contacto</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};









