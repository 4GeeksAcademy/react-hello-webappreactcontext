const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			crearAgenda: () => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({

				});

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					//body: raw,
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/david", requestOptions)
					.then((response) => response.json())
					.then((result) => (getActions().getContacts()))
					.catch((error) => console.error(error));
			},
			getContacts: () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/david", requestOptions)
					.then((response) => {
						if (response.status == 404) {
							getActions().crearAgenda()
						} else return response.json();
					})
					.then((result) => (setStore({ contacts: result.contacts })))
					.catch((error) => console.error(error));
			},
			deleteContact: () => async (id) => {
				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/david/contacts/${id}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (resp.status !== 202) {
						alert("Theres been an error while eliminating contact");
					}
					return await resp.json();
				} catch (error) {
					console.log("Error:" + error);
				}
			},
			editContact: () => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": "Espinete",
					"phone": "8904353245",
					"email": "spinet@barriosesamo.com",
					"address": "calle panaderia Chema"
				});

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/david/id", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
			}


		}
	};
};

export default getState;
