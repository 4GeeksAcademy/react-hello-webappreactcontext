import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import  Formulario  from "./views/formulario";
import injectContext from "./store/appContext";
import  Boton  from "./component/boton";



const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>						
					<Boton />													
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/formulario" element={<Formulario />} />					
					</Routes>					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
