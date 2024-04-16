import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Carta = ({id, nombre, direccion, telefono, email}) => {
    const { store, actions } = useContext(Context);   

        const handleDelete = async (id) =>{
            try{
                await actions.deleteContact(id);
            }
            catch(error){console.log(error)}
        }
    return (
        <div className="container mt-3 mb-3">
            <div className="card" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?tf=3840x" alt="..." style={{ width: "300px", height: "200px" }}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <h5 className="card-title col-10">{nombre}</h5>
                                <h5><i className="fa-solid fa-pen"></i></h5>
                                <button className="botonBorrar" onClick={() => {handleDelete(id)}}><i className="fa-solid fa-trash ml-4"></i></button>
                            </div>
                            <p className="card-text"><i className="fa-solid fa-location-dot mr-2"></i>{direccion}</p>
                            <p className="card-text"><small className="text-muted"><i className="fa-solid fa-phone mr-2"></i>{telefono}</small></p>
                            <p className="card-text"><small className="text-muted"><i className="fa-solid fa-envelope mr-2"></i>{email}</small></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carta;