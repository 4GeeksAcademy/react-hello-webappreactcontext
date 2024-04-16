import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

const Formulario = () => {

	const { store, actions } = useContext(Context);  
	 const handleDelete = () =>{

	 }
	return (
		<>
			<form className="container">
				<div className="form-group">
					<label for="inputNombre"><strong>Nombre completo</strong></label>
					<input type="text" className="form-control" id="inputNombre" placeholder="Nombre completo" />
				</div>
				<div className="form-group">
					<label for="inputEmail"><strong>Email</strong></label>
					<input type="text" className="form-control" id="inputEmail" placeholder="Introduce tu email" />
				</div>
				<div className="form-group">
					<label for="inputPhone"><strong>Telefono</strong></label>
					<input type="text" className="form-control" id="inputPhone" placeholder="Introduce tu telefono" />
				</div>
				<div className="form-group">
					<label for="inputAddress"><strong>Dirección</strong></label>
					<input type="text" className="form-control" id="inputAddress" placeholder="Introduce tu dirección" />
				</div>
				<Link to="/">
					<button type="button" class="btn btn-primary btn-lg btn-block">Guardar</button>
				</Link>
			</form>
			<footer className="footer mt-auto py-3 text-center">				
				<Link to="/">
					<button type="button" class="btn btn-secondary btn-lg">Volver a pagina principal</button>
				</Link>

			</footer>
		</>
	)
}

export default Formulario;