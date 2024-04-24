import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Contacto } from "../component/contacto";
import { Navbar } from "../component/navbar";
import "../../styles/viewContacto.css";
import "../../styles/navbar.css"

export const ViewContacto = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center">
        {store.contactos.map((contacto, index) => {
          const image = actions.imagenAleatoria()
          return (
            <Contacto    
              imagen={image}         
              key={index}
              nombre={contacto.name}
              direccion={contacto.address}
              telefono={contacto.phone}
              email={contacto.email}
              id={contacto.id}
            />
          );
        })}
      </div>
    </>
  );
};
