import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	console.log(store.people);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="mb-2">{`${store.people[params.theid].name}`}</h1>
			<hr className="mt-0 bg-danger cardhr" />
			<div className="">
				<div className="">
					<p className>Gender: {store.people[params.theid].gender}</p>
					<p>Height: {store.people[params.theid].height}</p>
					<p>Mass: {store.people[params.theid].mass}</p>
					<p>Films: {store.films[params.theid].title}</p>
				</div>
			</div>
			<div className="mt-2">
				<Link to="/">
					<span className="btn btn-primary btn-lg mx-auto" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

// {store.people[params.theid].name + store.people[params.theid].gender}
