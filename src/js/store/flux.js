const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: [],

		},
		actions: {
			cargarContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/david")
					.then((response) => {
						if (response.ok) {
							return response.json();
						} else {
							if (response.status === 404) {
								getActions().crearUsuario(); // Llamar a la función crearUsuario
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
						console.log(result)})
					.catch((error) => console.error(error));
			},

			editarContacto: (id, contactoEditado) => {
				const requestOptions = {
					method: "PUT",
					headers: {
						"Content-Type": "aplication/json"
					},
					body: JSON.stringify(contactoEditado),
					redirect: "follow"
				};

				fetch(`https://playground.4geeks.com/contact/agendas/david/contacts/${id}`, requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
				getActions().cargarContactos();
			},

			eliminarContacto: (id) => {
				const requestOptions = {
					method: "DELETE",
					headers: {
						"Content-Type": "aplication/json"
					},
					redirect: "follow"
				};

				fetch(`https://playground.4geeks.com/contact/agendas/david/contacts/${id}`, requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
				getActions().cargarContactos();
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				// Implementar carga de datos desde una API usando fetch y actualizar el store
				// fetch().then().then(data => setStore({ "foo": data.bar }))
			},

			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) {
						elm.background = color;
					}
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;























