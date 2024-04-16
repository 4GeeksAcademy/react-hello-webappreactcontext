import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";



export const formulario = () => {
    const { store, actions } = useContext(Context);
    const contacts = store.contacts;

    useEffect(() => {
        actions.getContacts(); 
    }, []); 
  
    

    return (
        <div className="text-center mt-5">
           
        </div>
    );
}












