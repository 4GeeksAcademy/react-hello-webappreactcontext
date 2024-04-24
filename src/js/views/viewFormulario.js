import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Formulario } from "../component/formulario";


export const ViewFormulario = () => {
    const { store, actions } = useContext(Context);
    return(
        <Formulario />
    );
};