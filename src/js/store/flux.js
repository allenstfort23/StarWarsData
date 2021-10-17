import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	//
	// console.log(apiURL);
	return {
		store: {
			// myURL: "https://swapi.dev/api",
			people: [],
			planets: [],
			favorites: [],
			Images: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]

			// This is the format for images to get.

			//src="https://kumquat-cardinal-gpqhzu3p.ws-us11.gitpod.io/files/download/?id=5a5e99d5-e6d8-431e-ab7d-29b88cbc3d56"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				/**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				// const store = getStore();
				// // const apiPeopleURL = "https://swapi.dev/api/people/";
				// // const apiPlanetsURL = "https://swapi.dev/api/planets/";
				// try {
				// 	let people = await fetch(store.myURL + "/people/");
				// 	let jsonPeople = await people.json();
				// 	let planets = await fetch(store.myURL + "/planets/");
				// 	let jsonPlanets = await planets.json();
				// 	setStore({ people: jsonPeople.results });
				// 	setStore({ planets: jsonPlanets.results });
				// } catch (error) {
				// 	console.log(error);
				// }
				// },
				const apiPeopleURL = "https://swapi.dev/api/people/";
				fetch(apiPeopleURL)
					.then(res => res.json())
					.then(res => {
						let peopleName = [];
						res.results.forEach((items, index, arr) => {
							peopleName.push(items);
						});
						setStore({ people: peopleName });
					});
			},

			fetchPlanets: () => {
				const apiPlanetsURL = "https://swapi.dev/api/planets/";
				fetch(apiPlanetsURL)
					.then(res => res.json())
					.then(res => {
						let planetsName = [];
						res.results.forEach((items, index, arr) => {
							planetsName.push(items);
						});
						console.log(setStore({ planets: planetsName }));
					});
			},
			updateFavorites: item => {
				let newFavorites = getStore().favorites;
				let found = newFavorites.find(element => element === item);
				if (found) {
					newFavorites = newFavorites.filter(element => item != element);
					setStore({ favorites: newFavorites });
				} else {
					newFavorites = [...newFavorites, item];
					setStore({ favorites: newFavorites });
				}
			},

			deleteFavorites: item => {
				let newFavorites = getStore().favorites;

				newFavorites = newFavorites.filter(element => item != element);
				setStore({ favorites: newFavorites });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
