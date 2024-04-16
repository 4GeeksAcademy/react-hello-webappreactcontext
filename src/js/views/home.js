import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Carta from "../component/carta";


export const Home = () => {
    const { store, actions } = useContext(Context);
    const contacts = store.contacts;

    useEffect(() => {
        actions.getContacts(); 
    }, []); 
    if (!contacts) {
        return <div>Cargando contactos...</div>;
    }

    return (
        <div className="text-center mt-5">
            {
                contacts.map((contact, index) => (
                    <Carta nombre={contact.name} telefono={contact.phone} email={contact.email} direccion={contact.address} key={contact.id}/>
                ))
            }
        </div>
    );
}












