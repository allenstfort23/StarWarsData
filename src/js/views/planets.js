import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">{`${store.planets[params.theid].name}`}</h1>

			<hr className="my-4" />
			<h5 className="display-4">{`${store.planets[params.theid].climate}`}</h5>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

// {store.people[params.theid].name + store.people[params.theid].gender}
