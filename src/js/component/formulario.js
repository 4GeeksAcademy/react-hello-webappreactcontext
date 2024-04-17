import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Formulario = () => {
  const {store, actions} = useContext(Context);
	const [ contacto, setContacto] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		actions.crearContacto(contacto)
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form className="formulario">
              <legend>AÑADE NUEVO CONTACTO</legend>
              <div className="mb-3">
                <label htmlFor="nombreCompleto" className="form-label">NOMBRE COMPLETO</label>
                <input type="text" id="nombreCompleto" className="form-control" placeholder="Nombre completo"
                onChange={(e) => setContacto({...contacto, name: e.target.value})}
                />
              </div>
              <div className="mb-3">                                                                                                                                
                <label htmlFor="email" className="form-label">EMAIL</label>
                <input type="text" id="email" className="form-control" placeholder="Correo electrónico" 
                onChange={(e) => setContacto({...contacto, email: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">TELEFONO</label>
                <input type="text" id="telefono" className="form-control" placeholder="Teléfono"
                onChange={(e) => setContacto({...contacto, phone: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">DIRECCION</label>
                <input type="text" id="direccion" className="form-control" placeholder="Dirección" 
                onChange={(e) => setContacto({...contacto, address: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                  <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                    Ir atrás a contactos.
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}>
                <i>G</i>
                <i>U</i>
                <i>A</i>
                <i>R</i>
                <i>D</i>
                <i>A</i>
                <i>R</i>
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};







