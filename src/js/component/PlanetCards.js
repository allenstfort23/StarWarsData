import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Home } from "../views/home";

export const PlanetCard = props => (
	<div className="card" style={{ width: "17rem" }}>
		<a href="https://placeholder.com">
			<img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
		</a>
		<hr className="bg-danger" />
		<div className="card-body">
			<h5 className="card-title text-justify">{props.name}</h5>
			<p className="card-text text-justify">
				<hr />
				Climate: {props.climate}
				<hr />
				Population: {props.population}
			</p>
			<Link to={"/planets/" + props.index} className="btn btn-outline-primary float-left">
				Learn More
			</Link>
			<a href="#" className="btn btn-outline-warning float-right">
				<i className="far fa-heart" />
			</a>
		</div>
	</div>
);
export default PlanetCard;
PlanetCard.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	index: PropTypes.number
};
