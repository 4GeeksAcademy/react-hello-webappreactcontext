import React from "react";
import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			contactos: [],
			contactoSeleccionado: null
		},
		actions: {
			imagenAleatoria: () => {
				const imagen = ["https://i.pinimg.com/474x/5a/eb/4e/5aeb4efe956d7d985e4816b248c4c1f7.jpg",
					"https://i.pinimg.com/474x/71/72/b1/7172b166cc0f8978099d292398cbad06.jpg",
					"https://i.pinimg.com/474x/15/6d/90/156d902adcb84ddbac8dd88373990353.jpg",
					"https://i.pinimg.com/474x/c0/23/cd/c023cdbf25cd784a1368be6cf15c069d.jpg",
					"https://i.pinimg.com/474x/c4/b1/18/c4b118797f4c449e5a850cb47fa3cebe.jpg",
					"https://i.pinimg.com/474x/18/cf/4e/18cf4e4d3a0af3c09c89c8e1e60cb215.jpg",
					"https://i.pinimg.com/474x/b7/e9/b2/b7e9b2928d67e5336a305c9417ab1365.jpg",
					"https://i.pinimg.com/474x/26/6a/41/266a410cd723521b0f0f5a7f90942f27.jpg"]
				const imagenAleatoria = Math.floor(Math.random() * imagen.length)
				return imagen[imagenAleatoria];
			},
			selectedid: (data) => {
				setStore({ contactoSeleccionado: data })
			},
			cargarContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/david")
					.then((response) => {
						if (response.ok) {
							return response.json();
						} else {
							if (response.status === 404) {
								getActions().crearUsuario(); 
							}
						}
					})
					.then((result) => setStore({ contactos: result.contacts }))
					.catch((error) => console.error(error));
			},

			crearUsuario: () => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "aplication/json"
					},
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/david", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
			},

			crearContacto: (contacto, navigate) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify(
					contacto
				);

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/david/contacts", requestOptions)
					.then((response) => response.json())
					.then((result) => {
						getActions().cargarContactos()
						navigate("/")
						console.log(result)
					})
					.catch((error) => console.error(error));
			},

			editarContacto: async (id, contactoEditado) => {
				const requestOptions = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contactoEditado),
					redirect: "follow"
				};


				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/david/contacts/${id}`, requestOptions)
					if (resp.ok) {
						const result = await resp.json()
						console.log(result)
						getActions().cargarContactos();
						return true;
					}
				} catch (error) {
					console.log(error)
					return false;
				}


			},

			eliminarContacto: (id) => {
				return (
					fetch(`https://playground.4geeks.com/contact/agendas/david/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Content.type": "application/json"
						}
					})
						.then(resp => {
							if (resp.status == 200) {
								console.log(resp)
								alert("Contacto eliminado exitosamente")
								getActions().cargarContactos()
							} else return resp.json();
						})
						.then(resp => console.log(resp))
						.catch(error => console.log(error))
				)
			}






		}
	};
};

export default getState;























