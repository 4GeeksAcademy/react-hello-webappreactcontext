import { Link } from "react-router-dom";
import React from "react";

const Boton = () =>{

    return(
        <div className="container d-flex justify-content-end mt-4">
           <Link to="/formulario">
           <button type="button" class="btn btn-success btn-lg">Añade un nuevo contacto</button>
           </Link>
        </div>
    )
}
export default Boton;