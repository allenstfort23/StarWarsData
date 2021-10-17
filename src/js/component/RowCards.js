import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { PeopleCard } from "../component/PeopleCards";
import { PlanetCard } from "../component/PlanetCards";
import { Row } from "../component/RowCards";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="People-Cards">
				<h1 className="text-danger">Characters</h1>
				<div className="text-center mt-5 row overflow-auto">
					{store.people.map((item, index) => {
						return (
							<PeopleCard
								key={index}
								name={item.name}
								gender={item.gender}
								hair_color={item.hair_color}
								eye_color={item.eye_color}
								index={index}
							/>
						);
					})}
					<hr />
				</div>
			</div>
			<div className="Planet-Cards mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="text-center mt-5 row overflow-auto">
					{store.planets.map((planet, index) => {
						return (
							<PlanetCard
								key={index}
								name={planet.name}
								climate={planet.climate}
								population={planet.population}
								index={index}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
