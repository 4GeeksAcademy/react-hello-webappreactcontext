import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="container-fluid footer mb-0">
                <h1>   Desarrollado by</h1>
                <div className="logo">
                    <div className="corcheteIzquierda">{'{'}</div>
                    <div className="a">D</div>
                    <div className="m">V</div>
                    <div className="d">D</div>
                    <div className="e">_ev</div>
                    <div className="corcheteDerecha">{'}'}</div>
                </div>
                <div className="fraseLogo">DevPassion</div>

            </div>
        </>
    )

}